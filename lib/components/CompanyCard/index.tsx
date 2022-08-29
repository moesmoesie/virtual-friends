import React from "react";
import Card from "../Card";
import { CompanyCardProps } from "./types";

const CompanyCard: React.FC<CompanyCardProps> = ({ type = "horizontal" }) => {
  return (
    <div className="flex">
      <Card>
        <div className="py-[30px] pl-6 pr-6 small:pr-12">
          {type == "horizontal" ? (
            <div className=" w-[600px]">
              <p className="body-3 pb-4 font-bold ">Virtual Friends</p>
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
                  <span className="mr-2 text-teal-500">
                    {/* {<FontAwesomeIcon icon={"phone"} />} */}
                  </span>
                  <span>+31612818127</span> <br />
                </p>

                <p className="body-2 flex-1 ">
                  <span className="mr-2 text-teal-500">
                    {/* <FontAwesomeIcon icon={"envelope"} /> */}
                  </span>
                  <span className="ml-1">mndarwesh@virtualfriends.dev</span>
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="body-3 pb-8 font-bold ">Virtual Friends</p>
              <div className="flex">
                <div>
                  <p className="body-2 mb-7">
                    Van Nelleweg 1 <br />
                    3044 BC Rotterdam <br />
                    The Netherlands
                  </p>

                  <p className="body-2 mb-7 whitespace-nowrap">
                    <span className="mr-2 text-teal-500">
                      {/* <FontAwesomeIcon icon={"phone"} /> */}
                    </span>
                    <span>+31612818127</span> <br />
                    <span className="mr-2 text-teal-500">
                      {/* <FontAwesomeIcon icon={"envelope"} /> */}
                    </span>
                    <span className="ml-1">mndarwesh@virtualfriends.dev</span>
                  </p>

                  <p className="body-2">
                    <span className="body-2 font-bold">KVK: </span>
                    <span>86165321</span> <br />
                    <span className="body-2 font-bold">BTW: </span>
                    <span>NL291929092B02</span> <br />
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CompanyCard;
