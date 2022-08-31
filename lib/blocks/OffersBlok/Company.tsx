import React from "react";
import { ReviewCard, EmployeeCard } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";

const Company: React.FC = () => {
  return (
    <div className="absolute grid gap-x-4 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <FloatingContainer delay={0}>
        <div className="w-[260px] h-[360px] translate-y-24">
          <EmployeeCard
            employee={{
              name: "John Doe",
              phone: "+31634XXX366",
              position: "A Virtual Friend",
              image:
                "https://a.storyblok.com/f/170199/663x849/12627c8cf4/employee2.png",
              github: "https://github.com/moesmoesie",
              linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
              mail: "mailto:mdarwesh@virtualfriends.dev",
            }}
          />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={0.5}>
        <div className="w-[260px] h-[360px] translate-y-16">
          <EmployeeCard
            employee={{
              name: "Jane Doe",
              phone: "+31634XXX366",
              position: "A Virtual Foe",
              image:
                "https://a.storyblok.com/f/170199/663x849/9e323dcf80/employee1.png",
              github: "https://github.com/moesmoesie",
              linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
              mail: "mailto:mdarwesh@virtualfriends.dev",
            }}
          />
        </div>
      </FloatingContainer>

      <div className="col-span-2 justify-self-center">
        <FloatingContainer delay={0.2}>
          <ReviewCard
            review={{
              name: "Jane Caboosy",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              company: "Caboosy inc",
              image:
                "https://a.storyblok.com/f/170199/512x512/6b21f39954/woman.png",
            }}
          />
        </FloatingContainer>
      </div>
    </div>
  );
};

export default Company;
