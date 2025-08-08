import React from 'react';
import type { IconProps } from '../types';

export const PointUnSam = (props: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 6h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6l-3 3v-3H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="11"
      r="1.5"
      fill="currentColor"
    />
  </svg>
);

export default PointUnSam;
