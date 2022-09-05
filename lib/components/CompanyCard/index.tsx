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
                  <span>NL004201207B04</span> <br />
                </p>
              </div>
              <div className="flex justify-between">
                <p className="body-2 flex flex-1">
                  <span className="mr-2 text-voilet-400">
                    <svg
                      className="w-5 h-5 translate-y-1 text-voilet-400"
                      viewBox="0 0 59 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57.8867 44.188L55.168 55.6294C54.8281 57.3286 53.4688 58.4614 51.7695 58.4614C23.2227 58.3481 0 35.1255 0 6.57861C0 4.87939 1.01953 3.52002 2.71875 3.18018L14.1602 0.461426C15.7461 0.121582 17.4453 1.02783 18.125 2.50049L23.4492 14.8481C24.0156 16.3208 23.6758 18.02 22.4297 18.9263L16.3125 23.9106C20.1641 31.7271 26.5078 38.0708 34.4375 41.9224L39.4219 35.8052C40.3281 34.6724 42.0273 34.2192 43.5 34.7856L55.8477 40.1099C57.3203 40.9028 58.2266 42.6021 57.8867 44.188Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span>+31612818127</span> <br />
                </p>

                <p className="body-2 flex items-center flex-1 ">
                  <span className="mr-2 text-voilet-400">
                    <svg
                      className="w-5 h-5 text-voilet-400"
                      viewBox="0 0 58 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M52.5625 0.598145C55.5078 0.598145 58 3.09033 58 6.03564C58 7.84814 57.0938 9.43408 55.7344 10.4536L31.1523 28.9185C29.793 29.938 28.0938 29.938 26.7344 28.9185L2.15234 10.4536C0.792969 9.43408 0 7.84814 0 6.03564C0 3.09033 2.37891 0.598145 5.4375 0.598145H52.5625ZM24.582 31.8638C27.1875 33.7896 30.6992 33.7896 33.3047 31.8638L58 13.2856V36.8481C58 40.9263 54.7148 44.0981 50.75 44.0981H7.25C3.17188 44.0981 0 40.9263 0 36.8481V13.2856L24.582 31.8638Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">mdarwesh@virtualfriends.dev</span>
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

                  <p className="body-2 items-center gap-2  flex whitespace-nowrap">
                    <svg
                      className="w-5 h-5 text-voilet-400"
                      viewBox="0 0 59 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57.8867 44.188L55.168 55.6294C54.8281 57.3286 53.4688 58.4614 51.7695 58.4614C23.2227 58.3481 0 35.1255 0 6.57861C0 4.87939 1.01953 3.52002 2.71875 3.18018L14.1602 0.461426C15.7461 0.121582 17.4453 1.02783 18.125 2.50049L23.4492 14.8481C24.0156 16.3208 23.6758 18.02 22.4297 18.9263L16.3125 23.9106C20.1641 31.7271 26.5078 38.0708 34.4375 41.9224L39.4219 35.8052C40.3281 34.6724 42.0273 34.2192 43.5 34.7856L55.8477 40.1099C57.3203 40.9028 58.2266 42.6021 57.8867 44.188Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span>+31612818127</span>
                  </p>

                  <p className="flex gap-2 items-center mb-7 body-2">
                    <svg
                      className="w-5 h-5 text-voilet-400"
                      viewBox="0 0 58 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M52.5625 0.598145C55.5078 0.598145 58 3.09033 58 6.03564C58 7.84814 57.0938 9.43408 55.7344 10.4536L31.1523 28.9185C29.793 29.938 28.0938 29.938 26.7344 28.9185L2.15234 10.4536C0.792969 9.43408 0 7.84814 0 6.03564C0 3.09033 2.37891 0.598145 5.4375 0.598145H52.5625ZM24.582 31.8638C27.1875 33.7896 30.6992 33.7896 33.3047 31.8638L58 13.2856V36.8481C58 40.9263 54.7148 44.0981 50.75 44.0981H7.25C3.17188 44.0981 0 40.9263 0 36.8481V13.2856L24.582 31.8638Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span className="ml-1">mdarwesh@virtualfriends.dev</span>
                  </p>

                  <p className="body-2">
                    <span className="body-2 font-bold">KVK: </span>
                    <span>86165321</span> <br />
                    <span className="body-2 font-bold">BTW: </span>
                    <span>NL004201207B04</span> <br />
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
