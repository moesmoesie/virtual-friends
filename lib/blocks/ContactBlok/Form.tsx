import { useState, useEffect } from "react";
import { Button, Input, SelectInput, MultlineInput } from "../../components";

interface FormDataType {
  name: string;
  email: string;
  catagory: string;
  message: string;
}

const Form: React.FC = () => {
  const formData: FormDataType = {
    name: "",
    email: "",
    catagory: "",
    message: "",
  };

  const [formBody, setformBody] = useState<FormDataType>(formData);

  const inputChangeHandler = (name: string, value: string) => {
    setformBody({ ...formBody, [name]: value });
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(
      `${formBody.name} \n${formBody.email} \n${formBody.catagory} \n${formBody.message}`
    );
  };

  return (
    <form className="flex-1 gap-3 gap-x-6 grid-cols-1 grid">
      <Input
        setValue={(name, value) => inputChangeHandler(name, value)}
        required
        placeholder="Name"
        name="name"
      />

      <Input
        setValue={(name, value) => inputChangeHandler(name, value)}
        required
        placeholder="E-mail"
        name="email"
      />

      <SelectInput
        setValue={(name, value) => inputChangeHandler(name, value)}
        type="select"
        required
        placeholder="Catagory"
        options={["Need a website", "E-Commerce", "Other"]}
        name="catagory"
      />

      <MultlineInput
        setValue={(name, value) => inputChangeHandler(name, value)}
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
