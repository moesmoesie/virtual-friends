import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface FontAwesomeEditorTextProps {
  children: JSX.Element;
}

import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

const FontAwesomeEditorText: React.FC<FontAwesomeEditorTextProps> = ({
  children,
}) => {
  const text = children.props.text.text;

  const icon = findIconDefinition({
    prefix: "fas",
    iconName: text,
  });

  return (
    <div className="group relative z-50 inline">
      <span
        className={`border-b-2   ${
          icon?.iconName !== undefined ? "group-hover:opacity-0" : ""
        }`}
      >
        {children}
      </span>
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:inline">
        <FontAwesomeIcon icon={icon?.iconName} />
      </div>
    </div>
  );
};

export default FontAwesomeEditorText;
