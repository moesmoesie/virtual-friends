export interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  setValue: (name: string, value: string) => void;
}

export interface InputSelectProps extends InputProps {
  type: "select";
  options: string[];
}

export interface InputMultilineProps extends InputProps {
  type: "multiline";
}
