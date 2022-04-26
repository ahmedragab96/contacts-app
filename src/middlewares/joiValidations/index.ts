import { Joi, Segments } from "celebrate";

const usersSchema = {
	AuthUsersSchema: {
		[Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
	}
};

const contactsSchema = {
  AddContactSchema: {
    [Segments.BODY]: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      address: Joi.string().required(),
    }),
  },
};

export { contactsSchema, usersSchema };
