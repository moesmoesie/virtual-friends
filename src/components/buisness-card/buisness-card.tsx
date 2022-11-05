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
        <a
          className="block hover:underline focus:underline"
          href={`tel:${props.telephone}`}
        >
          <span>📞</span> {props.telephone}
        </a>

        <a
          className="block focus:underline hover:underline"
          href={`mailto:${props.email}`}
        >
          <span>📧</span> {props.email}
        </a>
      </div>

      <div className="body-1">
        <p>
          <span className="font-bold">KVK:</span> {props.kvk}
        </p>
        <p>
          <span className="font-bold">BTW:</span> {props.btw}
        </p>
      </div>
    </div>
  );
};
