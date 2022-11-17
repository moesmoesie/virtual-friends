import Employee from "../../components/employee/employee";
import { Floating } from "../../components/floating/floating";
import { Review } from "../../components/review/review";
import { Solution, SolutionType } from "./solutions.content";
import { employees, review } from "./solutions.data";

export const SolutionJamstack: React.FC<SolutionType> = (props) => {
  return (
    <Solution content={props.content} isReversed={props.isReversed}>
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-5">
          <Floating>
            <Employee {...employees[0]} />
          </Floating>
          <Floating delay={1}>
            <div className="translate-y-5 flex-1">
              <Employee {...employees[1]} />
            </div>
          </Floating>
        </div>
        <Floating>
          <div className="-translate-y-6">
            <Review {...review} />
          </div>
        </Floating>
      </div>
    </Solution>
  );
};
