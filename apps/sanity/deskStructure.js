// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { RiPagesLine } from "react-icons/ri";
import * as Pages from "./schemas/pages";
import * as Components from "./schemas/components";
import { BiAtom } from "react-icons/bi";

const pageTypes = Object.values(Pages).map((el) => el.name);

const PagesListItem = S.listItem()
  .title("Pages")
  .icon(RiPagesLine)
  .child(
    S.documentList()
      .title("Pages")
      .filter("_type in $types && _lang == $baseLang")
      .params({ types: pageTypes, baseLang: "en-us" })
  );

const ComponentsListItem = S.listItem()
  .title("Components")
  .icon(BiAtom)
  .child(
    S.list()
      .title("Components")
      .items([
        ...Object.values(Components).map((el) => {
          return S.listItem()
            .title(el.title)
            .icon(el.icon)
            .child(S.documentTypeList(el.name));
        }),
      ])
  );

export default () =>
  S.list().title("Content").items([PagesListItem, ComponentsListItem]);
