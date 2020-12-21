import React from 'react';

interface GbxProps {
  color?: string;
  size?: string | number;
}

const Gbx = (props: GbxProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      viewBox="0 0 33 32"
    >
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.301-20.994h-4.7c-.995 0-2.141.325-3.054.973C6.717 12.851 6 14.217 6 16.003s.717 3.152 1.945 4.024a5.447 5.447 0 003.053.973H13v-2.06h-2c-.61 0-1.361-.214-1.92-.61C8.386 17.838 8 17.102 8 16.003s.387-1.835 1.08-2.327a3.507 3.507 0 011.92-.61h4.7zm-5 6.182H13.7V21h2v-5.873h-5zM19 13.06h5v5.878h-5.002v-5.872h-2V21H26V11h-7.002z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Gbx;