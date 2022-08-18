import { useRef } from "react";
import { Button, Input, SelectInput, MultlineInput } from "../../components";

interface FormValue {
  value: string;
  status?: "success" | "error";
  message?: string;
}

const Form: React.FC = () => {
  const name = useRef<FormValue>({ value: "" });
  const email = useRef<FormValue>({ value: "" });
  const catagory = useRef<FormValue>({ value: "" });
  const message = useRef<FormValue>({ value: "" });

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(catagory.current.value);
    console.log(message.current.value);
  };

  return (
    <form className="flex-1 gap-3 gap-x-6 grid-cols-1 grid">
      <Input inputRef={name} required placeholder="Name" name="name" />

      <Input inputRef={email} required placeholder="E-mail" name="email" />

      <SelectInput
        inputRef={catagory}
        type="select"
        required
        placeholder="Catagory"
        options={["Need a website", "E-Commerce", "Other"]}
        name="catagory"
      />

      <MultlineInput
        inputRef={message}
        type="multiline"
        placeholder="Message"
        name="message"
      />

      <div className="mt-8">
        <Button onClick={onSubmit} type="accent">
          <span className="body-2 whitespace-nowrap">Send Message</span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
