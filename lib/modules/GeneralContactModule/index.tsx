import { Container, CompanyCard, ContactForm } from "../../components";
import { GeneralContactModuleProps } from "./types";

const GeneralContactModule: React.FC<GeneralContactModuleProps> = ({
  title,
}) => {
  return (
    <div className="bg-DarkPurple/600 py-20">
      <Container>
        <h2 className="gradient-text display-1  mb-9 inline-block">{title}</h2>

        <div className="flex flex-col large:flex-row gap-12">
          <div className="w-full">
            <div className="medium:hidden">
              <ContactForm
                fields={[
                  { type: "default", name: "hello", placeholder: "Name" },
                  { type: "default", name: "hello", placeholder: "Company" },
                  { type: "default", name: "hello", placeholder: "Phone" },
                  { type: "default", name: "hello", placeholder: "Email" },
                  {
                    type: "default",
                    name: "hello",
                    placeholder: "Project Type",
                  },
                  { type: "default", name: "hello", placeholder: "Budget" },
                ]}
                type="small"
                message={{
                  name: "message",
                  placeholder: "Message",
                  type: "multiline",
                }}
              />
            </div>
            <div className="hidden medium:block">
              <ContactForm
                fields={[
                  { type: "default", name: "hello", placeholder: "Name" },
                  { type: "default", name: "hello", placeholder: "Company" },
                  { type: "default", name: "hello", placeholder: "Phone" },
                  { type: "default", name: "hello", placeholder: "Email" },
                  {
                    type: "default",
                    name: "hello",
                    placeholder: "Project Type",
                  },
                  { type: "default", name: "hello", placeholder: "Budget" },
                ]}
                type="large"
                message={{
                  name: "message",
                  placeholder: "Message",
                  type: "multiline",
                }}
              />
            </div>
          </div>
          <div>
            <div className="medium:hidden large:block large:-translate-y-1/4">
              <CompanyCard type="verticle" />
            </div>
            <div className="hidden medium:block large:hidden">
              <CompanyCard type="horizontal" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GeneralContactModule;
