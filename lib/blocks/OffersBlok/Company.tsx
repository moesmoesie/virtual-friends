import React from "react";
import { ReviewCard, EmployeeCard } from "../../components";

const Company: React.FC = () => {
  return (
    <div className="absolute grid gap-x-4 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[260px] h-[360px] translate-y-24 shadow-2xl">
        <EmployeeCard
          employee={{
            name: "John Doe",
            phone: "+31634XXX366",
            position: "A Virtual Friend",
            image: "/assets/employee1.png",
          }}
        />
      </div>

      <div>
        <div className="w-[260px] h-[360px] shadow-2xl translate-y-16">
          <EmployeeCard
            employee={{
              name: "Jane Doe",
              phone: "+31634XXX366",
              position: "A Virtual Foe",
              image: "/assets/employee2.png",
              github: "hello",
              linkedin: "asda",
              mail: "asda",
            }}
          />
        </div>
      </div>

      <div className="col-span-2 justify-self-center">
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
      </div>
    </div>
  );
};

export default Company;
