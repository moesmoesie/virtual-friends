export interface TextFieldType {
  name: string;
  label: string;
  error?: string;
  isRequired: boolean;
  success: boolean;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

export const TextField: React.FC<TextFieldType> = (props) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="body-2 flex gap-1">
        <label htmlFor={props.name}>{props.label}</label>
        {props.isRequired && <p className="text-danger">*</p>}
      </div>
      <input
        className={`rounded-[4px] border border-transparent p-3 shadow-m outline-none placeholder:text-grey-300 focus:border-primary-400 
        ${props.error ? "!border-danger" : ""}
        ${props.success && !props.error ? "!border-success" : ""}
        `}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(value) => props.onChange(value.target.value)}
        type="text"
        name={props.name}
      />
      {props?.error && <p className="body-3 text-danger">{props.error}</p>}
    </div>
  );
};
