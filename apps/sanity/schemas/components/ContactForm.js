import { createComponent } from "../../utils";

export default createComponent({
  name: "contactForm",
  title: "Contact Form",
  fields: [
    {
      name: "inputs",
      title: "Inputs",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sendButton",
      title: "Send Button",
      type: "reference",
      to: [{ type: "button" }],
    },
  ],
});
