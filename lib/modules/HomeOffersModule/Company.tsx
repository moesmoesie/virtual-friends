import React from "react";
import {
  ReviewCard,
  EmployeeCard,
  BlurredRadialGradient,
} from "../../components";

const Company: React.FC = () => {
  return (
    <div className="grid-row-[min-content,min-content] relative hidden flex-1 grid-cols-[min-content,min-content] gap-x-5 large:grid">
      <div className="absolute left-1/2 top-1/2 -z-50 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 text-PurpleNavy/400">
        <BlurredRadialGradient />
      </div>
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
        }}
      />
    </div>
  );
};

export default Company;
