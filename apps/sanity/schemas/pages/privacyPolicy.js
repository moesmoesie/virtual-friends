import { AiOutlineLock } from "react-icons/ai";
import createPageComponent from "../../utils/createPageComponent";

export default createPageComponent({
  name: "privacyPolicyPage",
  title: "Privacy Policy",
  type: "document",
  props: {
    icon: AiOutlineLock,
  },
  slug: "privacy",
  isHomePage: false,
  fields: [],
});
