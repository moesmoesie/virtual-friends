import React from "react";
import { EmployeeCardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StoryblokImage from "../StoryblokImage";

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="relative flex w-full h-full overflow-hidden rounded-lg ">
      <div className="z-10 flex items-end justify-between w-full mt-auto p-6 text-white">
        <div>
          <p className="body-2 font-bold">{employee.name}</p>
          <p className="body-1 -translate-y-1 text-teal-500">
            {employee.position}
          </p>
          <p className="body-1">{employee.phone}</p>
        </div>
        <div className="flex gap-2 flex-col">
          {employee?.linkedin && (
            <a href={employee?.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-xl" icon={["fab", "linkedin"]} />
            </a>
          )}

          {employee?.github && (
            <a href={employee?.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-xl" icon={["fab", "github"]} />
            </a>
          )}

          {employee?.mail && (
            <a href={employee?.mail}>
              <FontAwesomeIcon className="text-xl" icon={"envelope"} />
            </a>
          )}
        </div>
      </div>

      <StoryblokImage
        filename={employee.image}
        size={500}
        is_external_url={false}
        alt={"Company employee"}
        lazy={true}
        className="absolute object-cover top-0 h-full w-full"
      />
    </div>
  );
};

export default EmployeeCard;
