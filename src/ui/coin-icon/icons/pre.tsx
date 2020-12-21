import React from 'react';

interface PreProps {
  color?: string;
  size?: string | number;
}

const Pre = (props: PreProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
    >
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.53-13.955h1.678a3.23 3.23 0 001.387-.308c.41-.203.776-.484 1.077-.828.299-.356.53-.763.684-1.201a3.92 3.92 0 00.248-1.388 3.393 3.393 0 00-.27-1.346 4.143 4.143 0 00-.724-1.18 3.636 3.636 0 00-1.098-.848 2.974 2.974 0 00-1.384-.332h-4.41v10.703h2.816l-.004-3.272zm0-4.846h1.427a.77.77 0 01.518.249c.166.165.27.456.27.911s-.103.725-.25.872c-.123.145-.289.248-.475.248h-1.49V13.2zM7.023 8.031v15.887c0 .57.461 1.03 1.03 1.03h15.888c.569 0 1.03-.46 1.03-1.03V8.03a1.03 1.03 0 00-1.03-1.031H8.053a1.03 1.03 0 00-1.03 1.03zm14.803 14.803h-11.68a1.03 1.03 0 01-1.031-1.03v-11.68a1.03 1.03 0 011.031-1.031h11.68c.57 0 1.03.461 1.03 1.03v11.68c0 .57-.46 1.031-1.03 1.031zm-7.093-3.525v2.03h6.607v-2.03h-6.607z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Pre;