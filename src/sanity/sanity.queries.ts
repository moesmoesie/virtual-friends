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
        seo,
        modules[]{
          _type,
          _id,
          module,
          _type == "header" => {
            logo{
              defined(alt) => alt,
              defined(title) => title,
              ...asset->{
                'src': url,
                'blurDataURL': metadata.blurHash,
                'width': metadata.dimensions.width,
                'height': metadata.dimensions.height,
              },
            },
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
            image{
              defined(alt) => alt,
              defined(title) => title,
              ...asset->{
                'src': url,
                'blurDataURL': metadata.blurHash,
                'width': metadata.dimensions.width,
                'height': metadata.dimensions.height,
              }
            },
            imageBackground{
              defined(alt) => alt,
              defined(title) => title,
              ...asset->{
                'src': url,
                'blurDataURL': metadata.blurHash,
                'width': metadata.dimensions.width,
                'height': metadata.dimensions.height,
              },
            },
            primaryCallToAction,
            secondaryCallToAction
          },
          _type == "about-me" => {
            title,
            body
          },
          _type == "sellingPoints" => {
            sellingPoints[]{
              icon{
                defined(alt) => alt,
                defined(title) => title,
                ...asset->{
                'src': url,
                'blurDataURL': metadata.blurHash,
                'width': metadata.dimensions.width,
                'height': metadata.dimensions.height,
               },
              },
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
              image{
                defined(alt) => alt,
                defined(title) => title,
                ...asset-> {
                  'src': url,
                  'blurDataURL': metadata.blurHash,
                  'width': metadata.dimensions.width,
                  'height': metadata.dimensions.height,
                },
              },
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
