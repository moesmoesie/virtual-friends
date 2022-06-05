import createModule from "../../utils/createModule";
import { CgComponents } from "react-icons/cg";

export default createModule({
  name: "contactModule",
  title: "Contact Module",
  subtitle: "Contact",
  icon: CgComponents,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      type: "reference",
      name: "contactForm",
      to: [{ type: "contactForm" }],
    },
    {
      type: "reference",
      name: "companyDetailsCard",
      to: [{ type: "companyDetailsCard" }],
    },
  ],
});
