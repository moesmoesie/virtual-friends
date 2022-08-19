import { Button, Input, SelectInput, MultlineInput } from "../../components";
import { useForm } from "./useForm";

const initialValues = {
  name: "",
  email: "",
  message: "",
  catagory: "",
};

const Required = (value: string) => {
  if (value.length <= 0) {
    return "This field is required!";
  }
};

const Form: React.FC = () => {
  const form = useForm(initialValues, {
    name: [Required],
    email: [Required],
    message: [Required],
  });

  return (
    <form className="flex-1 gap-3 gap-x-6 grid-cols-1 grid">
      <Input
        onChange={(name, value) => form.changeHandler(name as any, value)}
        required
        status={form.getStatus("name")}
        placeholder="Name"
        errorMessage={form.getFirstErrorMessage("name")}
        name="name"
      />

      <Input
        onChange={(name, value) => form.changeHandler(name as any, value)}
        status={form.getStatus("email")}
        required
        placeholder="E-mail"
        errorMessage={form.getFirstErrorMessage("email")}
        name="email"
      />

      <SelectInput
        onChange={(name, value) => form.changeHandler(name as any, value)}
        type="select"
        required
        status={form.getStatus("catagory")}
        placeholder="Catagory"
        errorMessage={form.getFirstErrorMessage("catagory")}
        options={["Need a website", "E-Commerce", "Other"]}
        name="catagory"
      />

      <MultlineInput
        onChange={(name, value) => form.changeHandler(name as any, value)}
        status={form.getStatus("message")}
        type="multiline"
        errorMessage={form.getFirstErrorMessage("message")}
        placeholder="Message"
        name="message"
      />

      <div className="mt-8">
        <Button onClick={form.submit} type="accent">
          <span className="body-2 whitespace-nowrap">Send Message</span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
