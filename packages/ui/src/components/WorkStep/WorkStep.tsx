import React from "react";
import Card from "../Card";
interface WorkStepProps {
  title: string;
  body: string;
  varient: "card" | "no-card";
}

const WorkStep: React.FC<WorkStepProps> = ({ title, body, varient }) => {
  if (varient == "no-card") {
    return (
      <div className="max-w-xs">
        <h3 className="body-3 font-bold">{title}</h3>
        <p className="body-1">{body}</p>
      </div>
    );
  } else {
    return (
      <Card>
        <div className="flex h-[250px] flex-col items-center justify-center px-5">
          <h3 className="body-3 mb-3 text-center font-bold">{title}</h3>
          <p className="body-1 text-center">{body}</p>
        </div>
      </Card>
    );
  }
};

export default WorkStep;
