'use client';

import React, { useEffect, useState } from 'react';

interface CustomCheckboxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  isChecked,
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleClick = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <div
      className={`flex h-[19px] w-[19px] cursor-pointer items-center justify-center rounded-[5px] border border-solid border-[#BFBFBF]`}
      onClick={handleClick}
    >
      <input
        type='checkbox'
        className='hidden'
        checked={checked}
        onChange={() => {
          // This empty onChange handler prevents React from throwing a warning about onChange not being provided
        }}
      />
      <div
        className={`h-[11px] w-[11px] rounded-[2px] ${checked ? 'bg-[#E98A14]' : ''}`}
      ></div>
    </div>
  );
};

export default CustomCheckbox;
