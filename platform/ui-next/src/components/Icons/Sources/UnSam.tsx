import React from 'react';
import type { IconProps } from '../types';

export const UnSam = (props: IconProps) => (
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
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <line x1="9.33" y1="4" x2="9.33" y2="20" stroke="currentColor" strokeWidth="1"/>
    <line x1="14.66" y1="4" x2="14.66" y2="20" stroke="currentColor" strokeWidth="1"/>
    <line x1="4" y1="9.33" x2="20" y2="9.33" stroke="currentColor" strokeWidth="1"/>
    <line x1="4" y1="14.66" x2="20" y2="14.66" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export default UnSam;
