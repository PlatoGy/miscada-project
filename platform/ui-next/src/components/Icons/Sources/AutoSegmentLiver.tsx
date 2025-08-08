import React from 'react';
import type { IconProps } from '../types';

export const AutoSegmentLiver = (props: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
    />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      fill="currentColor"
      fontSize="6"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      Auto
    </text>
  </svg>
);

export default AutoSegmentLiver;
