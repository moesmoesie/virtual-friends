import React from "react";
import { EmployeeCardProps } from "./types";
const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="relative flex h-[422px] w-[301px] overflow-hidden rounded-lg ">
      <div className="mt-auto p-6 text-white">
        <p className="body-2 font-bold">{employee.name}</p>
        <p className="body-1 -translate-y-1 text-Teal/500">
          {employee.position}
        </p>
        <p className="body-1">{employee.phone}</p>
      </div>
      <img
        src={employee.image}
        className="absolute top-0 -z-10 h-full w-full"
      />
    </div>
  );
};

export default EmployeeCard;
