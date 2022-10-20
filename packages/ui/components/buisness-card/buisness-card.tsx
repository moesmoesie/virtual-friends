import React from "react";

export interface BuisnessCardType {
  address: string;
  postalcode: string;
  city: string;
  country: string;
  email: string;
  telephone: string;
  kvk: string;
  btw: string;
}

export const BuisnessCard: React.FC<BuisnessCardType> = (props) => {
  return (
    <div className="flex w-[360px] flex-col gap-6 rounded-lg p-6 text-black shadow-m">
      <p className="subtitle-2">Virtual Friends</p>

      <div className="body-1">
        <p>{props.address}</p>
        <p>
          {props.postalcode} {props.city}
        </p>
        <p>{props.country}</p>
      </div>

      <div className="body-1">
        <p>
          <PhoneIcon />
          {props.telephone}
        </p>
        <p>
          <MailIcon />
          {props.email}
        </p>
      </div>

      <div className="body-1">
        <p>
          <span className="font-bold">KVK:</span> {props.email}
        </p>
        <p>
          <span className="font-bold">BTW:</span> {props.btw}
        </p>
      </div>
    </div>
  );
};

const PhoneIcon = () => {
  return (
    <svg
      className="mr-2 inline"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3.5C2 2.94772 2.44772 2.5 3 2.5H5.15287C5.64171 2.5 6.0589 2.85341 6.13927 3.3356L6.87858 7.77147C6.95075 8.20451 6.73206 8.63397 6.3394 8.8303L4.79126 9.60437C5.90756 12.3783 8.12168 14.5924 10.8956 15.7087L11.6697 14.1606C11.866 13.7679 12.2955 13.5492 12.7285 13.6214L17.1644 14.3607C17.6466 14.4411 18 14.8583 18 15.3471V17.5C18 18.0523 17.5523 18.5 17 18.5H15C7.8203 18.5 2 12.6797 2 5.5V3.5Z"
        fill="#893AD8"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      className="mr-2 inline"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00333 6.38355L9.99995 10.3819L17.9967 6.3835C17.9363 5.33315 17.0655 4.5 16 4.5H4C2.93452 4.5 2.06363 5.33318 2.00333 6.38355Z"
        fill="#893AD8"
      />
      <path
        d="M18 8.6179L9.99995 12.6179L2 8.61796V14.5C2 15.6046 2.89543 16.5 4 16.5H16C17.1046 16.5 18 15.6046 18 14.5V8.6179Z"
        fill="#893AD8"
      />
    </svg>
  );
};
