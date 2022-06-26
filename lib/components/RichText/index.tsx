import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    "body-1": ({ children }) => <p className="body-1">{children}</p>,
    "body-2": ({ children }) => <p className="body-2">{children}</p>,
    "body-3": ({ children }) => <p className="body-3">{children}</p>,
    h1: ({ children }) => <h1 className="display-1">{children}</h1>,
    h2: ({ children }) => <h2 className="display-2">{children}</h2>,
    h3: ({ children }) => <h3 className="display-3">{children}</h3>,
    h4: ({ children }) => <h4 className="display-4">{children}</h4>,
  },

  marks: {
    gradient: ({ children }) => (
      <span className="gradient-text">{children}</span>
    ),
    bold: ({ children }) => <span className="font-bold">{children}</span>,
  },
};

const RichText: React.FC<{ content: string | any[]; className?: string }> = ({
  content,
  className,
}) => {
  if (typeof content === "string") {
    return <p className={className}>{content}</p>;
  }

  return <PortableText value={content} components={components} />;
};

export default RichText;
