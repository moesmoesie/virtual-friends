export interface ContactFormProps {
  fields: InputProps[];
  message: MultilineInputProps;
  type: "small" | "large";
}

interface BaseInputProps {
  name: string;
  placeholder: string;
}

interface DefaultInputProp extends BaseInputProps {
  type: "default";
}

interface EmailInputProps extends BaseInputProps {
  type: "type";
}

interface MultilineInputProps extends BaseInputProps {
  type: "multiline";
}

interface DropdownInputProps extends BaseInputProps {
  type: "dropdown";
  options: string[];
}

export type InputProps =
  | DefaultInputProp
  | DropdownInputProps
  | EmailInputProps
  | MultilineInputProps;
