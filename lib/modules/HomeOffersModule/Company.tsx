import React from "react";
import { ReviewCard, EmployeeCard } from "../../components";

const Company: React.FC = () => {
  return (
    <div className="grid-row-[min-content,min-content] relative hidden flex-1 grid-cols-[min-content,min-content] gap-x-5 large:grid">
      <div className="absolute bottom-0 left-1/2 z-50 translate-y-1/3 -translate-x-1/2">
        <ReviewCard
          review={{
            name: "Jane Caboosy",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            company: "Caboosy inc",
            image: "/assets/woman.png",
          }}
        />
      </div>
      <div className="relative">
        <EmployeeCard
          employee={{
            name: "John Doe",
            phone: "+31634XXX366",
            position: "A Virtual Friend",
            image: "/assets/employee1.png",
          }}
        />
      </div>

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
  );
};

export default Company;
