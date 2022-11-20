import { groq } from "next-sanity";

export const SlugQuery = groq`
  *[defined(slug.current)]{
      'params': {
        "slug": string::split(slug.current,"/")[@ != ""]
      }
  }
`;

const image = `{
  defined(alt) => alt,
  defined(title) => title,
  ...asset->{
    'src': url,
    'blurDataURL': metadata.blurHash,
    'width': metadata.dimensions.width,
    'height': metadata.dimensions.height
  }
}`;

export const PageQuery = `
    *[slug.current == $slug]{
        _id,
        seo,
        modules[]{
          _type,
          module,
          _type == "header" => {
            logo${image},
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
            image${image},
            imageBackground${image},
            primaryCallToAction,
            secondaryCallToAction
          },
          _type == "about-me" => {
            title,
            body
          },
          _type == "sellingPoints" => {
            sellingPoints[]{
              icon${image},
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
              image${image},
              body,
              keywords
            }
          },
          _type == "article" => {
            body
          }
        }
    }
`;
