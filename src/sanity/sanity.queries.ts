import { groq } from "next-sanity";

export const SlugQuery = groq`
  *[defined(slug.current)]{
      'params': {
        "slug": string::split(slug.current,"/")[@ != ""]
      }
  }
`;

export const PageQuery = groq`
    *[slug.current == $slug]{
        _id,
        "seo" : {
          "title" : coalesce(title, "Title"),
          "description" : coalesce(description, "Description"),
          "keywords" : coalesce(keywords, [])
        },
        modules[]-> {
          _type,
          _id,
          module,
          _type == "header" => {
            "logo": logo.asset->,
            links[]{
              text,
              href
            }
          },
          _type == "footer" => {
            links[]{
              text,
              href
            }
          },
          _type == "landing-home" => {
            title,
            subtitle,
            "image": image.asset->,
            "imageBackground": imageBackground.asset->,
            primaryCallToAction,
            secondaryCallToAction
          },
          _type == "about-me" => {
            title,
            body
          },
          _type == "sellingPoints" => {
            sellingPoints[]{
              "icon" : icon.asset->,
              title,
              body
            }
          },
          _type == "contact" => {
            title,
            body,
            primaryCallToAction,
            secondaryCallToAction
          },
          _type == "solutions" => {
            title,
            "content" : content[]{
              title,
              variant,
              "image": image.asset->,
              body,
              keywords
            }
          }
        }
    }
`;
