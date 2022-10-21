import React from "react";
import { Chip } from "../chip/chip";

export interface PickerType {
  name: string;
  label: string;
  isRequired: boolean;
  onChange: (index: number) => void;
  current: number;
  options: string[];
}

export const Picker: React.FC<PickerType> = (props) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="body-2 flex gap-1">
        <label htmlFor={props.name}>{props.label}</label>
        {props.isRequired && <p className="text-danger">*</p>}
      </div>
      <div className="flex gap-2">
        {props.options.map((value, index) => {
          return (
            <button key={index} onClick={() => props.onChange(index)}>
              <Chip
                variant={index === props.current ? "active" : "nonActive"}
                text={value}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
