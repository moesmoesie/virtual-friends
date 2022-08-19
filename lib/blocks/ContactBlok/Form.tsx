import { Button, Input, SelectInput, MultlineInput } from "../../components";
import { useForm } from "./useForm";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef } from "react";

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
  const ref = useRef<HCaptcha>(null);
  const form = useForm(initialValues, {
    name: [Required],
    email: [Required],
    message: [Required],
  });

  const hChaptchaError = form.getFirstErrorMessage("hChaptcha");

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

      <div className="mt-3">
        <HCaptcha
          onExpire={() => {
            ref.current?.resetCaptcha();
            form.setToken(null);
          }}
          ref={ref}
          theme="light"
          onVerify={(token, ekey) => form.setToken({ token, ekey })}
          sitekey={process.env["NEXT_PUBLIC_HCAPTCHA_SITE_KEY"]!}
        />
        {hChaptchaError && (
          <p className="mt-3 text-[#FF0000]">{hChaptchaError}</p>
        )}
      </div>

      <div className="mt-4">
        <Button onClick={form.submit} type="accent">
          <span className="body-2 whitespace-nowrap">Send Message</span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
