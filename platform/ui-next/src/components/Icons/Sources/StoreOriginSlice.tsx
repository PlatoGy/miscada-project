import React from 'react';
import type { IconProps } from '../types';

export const StoreOriginSlice = (props: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      ry="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="8"
      y="6"
      width="8"
      height="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 16h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default StoreOriginSlice;
