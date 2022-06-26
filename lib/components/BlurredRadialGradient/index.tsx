import React from "react";

const BlurredRadialGradient = () => {
  return (
    <svg
      viewBox="0 0 280 280"
      overflow={"visible"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        filter="url(#filter0_f_1015_399)"
        cx={140}
        cy={140}
        r={80}
        fill="currentColor"
      />
      <defs>
        <filter
          id="filter0_f_1015_399"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>
    </svg>
  );
};

export default BlurredRadialGradient;
