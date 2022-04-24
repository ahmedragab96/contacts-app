import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ContactsService } from "../../../services/contacts";

const contactService = ContactsService.Instance;

const addContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contactsData = req.body;

    await contactService.addContact(req.user!._id.toString(), contactsData);
    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully added contact.",
    });
  } catch (error) {
    return next(error);
  }
};

export { addContact };
