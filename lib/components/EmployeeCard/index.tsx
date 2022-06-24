import React from "react";
import { EmployeeCardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="relative flex h-[422px] w-[301px] overflow-hidden rounded-lg ">
      <div className="z-10 flex items-end justify-between w-full mt-auto p-6 text-white">
        <div>
          <p className="body-2 font-bold">{employee.name}</p>
          <p className="body-1 -translate-y-1 text-Teal/500">
            {employee.position}
          </p>
          <p className="body-1">{employee.phone}</p>
        </div>
        <div className="flex gap-2 flex-col">
          {employee?.linkedin && (
            <a href="#">
              <FontAwesomeIcon className="text-xl" icon={["fab", "linkedin"]} />
            </a>
          )}

          {employee?.github && (
            <a href="#">
              <FontAwesomeIcon className="text-xl" icon={["fab", "github"]} />
            </a>
          )}

          {employee?.mail && (
            <a href="#">
              <FontAwesomeIcon className="text-xl" icon={"envelope"} />
            </a>
          )}
        </div>
      </div>
      <img src={employee.image} className="absolute top-0 h-full w-full" />
    </div>
  );
};

export default EmployeeCard;
