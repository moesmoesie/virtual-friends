import { BiCookie } from "react-icons/bi";
import createPageComponent from "../../utils/createPageComponent";

export default createPageComponent({
  name: "cookiesPolicyPage",
  title: "Cookies Policy",
  type: "document",
  props: {
    icon: BiCookie,
  },
  slug: "cookies",
  isHomePage: false,
  fields: [],
});
