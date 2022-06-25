import React, { FC } from "react";
import { ContactFormProps } from "./types";
import Input from "./Input";
import Button from "../Button";

const ContactForm: FC<ContactFormProps> = ({ fields, message, type }) => {
  return (
    <form
      className={`w-full max-w-4xl grid gap-5 ${
        type === "large" ? "grid-cols-2" : " grid-cols-1"
      }`}
    >
      {fields.map((el, index) => {
        return (
          <div key={index}>
            <Input {...el} />
          </div>
        );
      })}
      <div className={`${type === "small" ? "col-span-1" : "col-span-2"}`}>
        <Input {...message} />
      </div>

      <div className="mt-3">
        <Button type="accent">
          <span className=" block px-8 py-3">Send</span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
