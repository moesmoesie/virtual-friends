import React from "react";
import Card from "../Card";

interface CompanyCardProps {
  className?: string;
  type: "horizontal" | "verticle";
  phoneIcon: JSX.Element;
  mailIcon: JSX.Element;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  type = "horizontal",
  phoneIcon,
  mailIcon,
}) => {
  return (
    <div className="flex">
      <Card>
        <div className="py-6 pl-6 pr-12">
          <p className="body-3 pb-4 font-bold text-Teal/500 ">
            Virtual Friends
          </p>

          {type == "horizontal" ? (
            <div className=" w-[600px]">
              <div className="flex justify-between">
                <p className="body-2 mb-4 flex-1">
                  Van Nelleweg 1 <br />
                  3044 BC Rotterdam <br />
                  The Netherlands
                </p>

                <p className="body-2 mb-4 flex-1 items-start">
                  <span className="body-2 font-bold">KVK: </span>
                  <span>86165321</span> <br />
                  <span className="body-2 font-bold">BTW: </span>
                  <span>NL291929092B02</span> <br />
                </p>
              </div>
              <div className="flex justify-between">
                <p className="body-2 flex-1">
                  <span className="mr-2">{phoneIcon}</span>
                  <span>+31612818127</span> <br />
                </p>

                <p className="body-2 flex-1 ">
                  <span className="mr-2">{mailIcon}</span>
                  <span className="ml-1">mndarwesh@virtualfriends.dev</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div>
                <p className="body-2 mb-4">
                  Van Nelleweg 1 <br />
                  3044 BC Rotterdam <br />
                  The Netherlands
                </p>

                <p className="body-2 mb-4">
                  <span className="mr-2">{phoneIcon}</span>
                  <span>+31612818127</span> <br />
                  <span className="mr-2">{mailIcon}</span>
                  <span className="ml-1">mndarwesh@virtualfriends.dev</span>
                </p>

                <p className="body-2 mb-4">
                  <span className="body-2 font-bold">KVK: </span>
                  <span>86165321</span> <br />
                  <span className="body-2 font-bold">BTW: </span>
                  <span>NL291929092B02</span> <br />
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CompanyCard;
