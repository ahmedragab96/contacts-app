import { IUser, UserModel } from "./types";
import { Schema, SchemaTypes, model } from 'mongoose';
import bcrypt from "bcrypt";

const UserSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: SchemaTypes.String,
      required: true,
    },

    password: {
      type: SchemaTypes.String,
      required: true,
    },
  },
  { timestamps: true }
);

// When the user registers
UserSchema.pre(
  "save",
  async function (this: IUser, next: any) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) return next();

    // Random additional data
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hashSync(this.password, salt);

    // Replace the password with the hash
    this.password = hash;

    return next();
  }
);

UserSchema.statics.findByEmail = function findByEmail(emailAddress, options = {}) {
  // TODO: validate emailAddress
  const { projection = [], references = [] } = options;
  const query = this.findOne({ email: new RegExp(`${emailAddress}`) });
  if (projection && projection.length > 0) {
    query.select(projection);
  }
  if (references && references.length > 0) {
    references.forEach((reference) => {
      query.populate(reference);
    });
  }
  return query.exec();
};

// Compare a candidate password with the user's password
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  // So we don't have to pass this into the interface method
  const user = this as IUser;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

export default model<IUser, UserModel>("User", UserSchema);
