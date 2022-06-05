import { createComponent } from "../../utils";

export default createComponent({
  name: "companyDetailsCard",
  title: "Company Details Card",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "textEditor",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "kvk",
      title: "KVK",
      type: "string",
    },
    {
      name: "taxId",
      title: "Tax ID",
      type: "string",
    },
  ],
});
