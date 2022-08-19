export interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  status : "idle" | "succes" | "error"
  errorMessage?: string
  onChange: (name: string, value: string) => void
}

export interface InputSelectProps extends InputProps {
  type: "select";
  options: string[];
}

export interface InputMultilineProps extends InputProps {
  type: "multiline";
}
