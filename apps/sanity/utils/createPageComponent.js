import client from "part:@sanity/base/client";

export default ({
  name,
  title,
  slug,
  fields,
  isHomePage = false,
  props = null,
}) => {
  return {
    name,
    title,
    type: "document",
    i18n: true,
    ...props,
    fields: [
      {
        type: "slug",
        name: "slug",
        title: "Slug",
        validation: isHomePage ? null : (Rule) => slugValidator(Rule),
        readOnly: true,
        options: {
          isUnique: isUniqueAcrossAllDocuments,
        },
      },
      ...fields,
    ],
    initialValue: {
      slug: {
        current: slug,
      },
    },
    preview: {
      select: {
        slug: "slug.current",
        title: "_type",
      },
      prepare(selection) {
        const { slug, title } = selection;
        return {
          subtitle: slug ? `/${slug}` : "/",
          title,
        };
      },
    },
  };
};

export function isUniqueAcrossAllDocuments(slug, options) {
  const { document } = options;
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    type: document._type,
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && _type != $type && slug.current == $slug][0]._id)`;
  return client.fetch(query, params);
}

export function slugValidator(Rule) {
  return Rule.custom((slug, context) => {
    if (slug == undefined) {
      return `Document cannot have an empty slug!`;
    }

    const regex = "^[a-z0-9]+(?:-[a-z0-9]+)*$";
    const found = slug.current.match(regex);

    if (!found) {
      return "Not valid slug!";
    }

    return slug.current.length > 2
      ? true
      : `Document of type "${context.document._type}" must have a slug of atleast 3 characters`;
  });
}
