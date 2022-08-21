import React from "react";
import { ReviewCard, EmployeeCard } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";

const Company: React.FC = () => {
  return (
    <div className="absolute grid gap-x-4 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <FloatingContainer delay={0}>
        <div className="w-[260px] h-[360px] translate-y-24 shadow-2xl">
          <EmployeeCard
            employee={{
              name: "John Doe",
              phone: "+31634XXX366",
              position: "A Virtual Friend",
              image: "/assets/employee1.png",
              github: "https://github.com/moesmoesie",
              linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
              mail: "mailto:mdarwesh@virtualfriends.dev",
            }}
          />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={0.5}>
        <div className="w-[260px] h-[360px] shadow-2xl translate-y-16">
          <EmployeeCard
            employee={{
              name: "Jane Doe",
              phone: "+31634XXX366",
              position: "A Virtual Foe",
              image: "/assets/employee2.png",
              github: "https://github.com/moesmoesie",
              linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
              mail: "mailto:mdarwesh@virtualfriends.dev",
            }}
          />
        </div>
      </FloatingContainer>

      <div className="col-span-2 justify-self-center">
        <FloatingContainer delay={0.2}>
          <div className="shadow-2xl">
            <ReviewCard
              review={{
                name: "Jane Caboosy",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                company: "Caboosy inc",
                image: "/assets/woman.png",
              }}
            />
          </div>
        </FloatingContainer>
      </div>
    </div>
  );
};

export default Company;
