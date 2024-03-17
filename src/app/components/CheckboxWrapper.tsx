// CheckboxWrapper.tsx
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import CustomCheckbox from './Checkbox';

interface CustomCheckboxWrapperProps {
  onOnderwerpChange: (onderwerp: string) => void;
}

interface CheckboxData {
  name: string;
  isChecked: boolean;
}

const CustomCheckboxWrapper = forwardRef<any, CustomCheckboxWrapperProps>((props, ref) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([
    { name: 'Aluminium hekken', isChecked: false },
    { name: 'Stalen hekken', isChecked: false },
    { name: 'Constructie', isChecked: false },
    { name: 'Algemene vraag', isChecked: false },
  ]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked;
    setCheckboxes(updatedCheckboxes);

    const selectedNames = updatedCheckboxes
      .filter(checkbox => checkbox.isChecked)
      .map(checkbox => checkbox.name);
    props.onOnderwerpChange(selectedNames.join(', '));
  };

  // Expose resetCheckboxes function via ref
  useImperativeHandle(ref, () => ({
    resetCheckboxes() {
      setCheckboxes(checkboxes.map(checkbox => ({ ...checkbox, isChecked: false })));
    }
  }));

  return (
    <div className='flex flex-col justify-start'>
      <label htmlFor='' className='mb-[15px] text-[18px] font-semibold opacity-[0.75]'>
        Ik heb een vraag over:
      </label>

      <div className='flex flex-col lg:flex-row gap-[19.91px] text-[#BFBFBF]'>
        <div className='flex w-[332.09px] flex-col gap-[14px]'>
          {checkboxes.slice(0, 2).map((checkbox, index) => (
            <div key={index} className='flex w-full items-center gap-[15.87px]'>
              <CustomCheckbox
                isChecked={checkbox.isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor=''>{checkbox.name}</label>
            </div>
          ))}
        </div>

        <div className='flex w-[332.09px] flex-col gap-[14px]'>
          {checkboxes.slice(2).map((checkbox, index) => (
            <div key={index} className='flex items-center gap-[15.87px]'>
              <CustomCheckbox
                isChecked={checkbox.isChecked}
                onChange={() => handleCheckboxChange(index + 2)}
              />
              <label htmlFor=''>{checkbox.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

CustomCheckboxWrapper.displayName = 'CustomCheckboxWrapper';

export default CustomCheckboxWrapper;
