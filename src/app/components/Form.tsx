'use client';

import React, { useState } from 'react';
import CustomCheckboxWrapper from './CheckboxWrapper';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

interface FormProps {
  title: string;
  color: string;
  titleForm: string;
}

const Form = ({ title, titleForm, color }: FormProps) => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoonnummer: '',
    onderwerp: '',
    opmerking: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [responseStatus, set] = useState<Boolean>();

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleOnderwerpChange = (onderwerp: string) => {
  //   setFormData({ ...formData, onderwerp });
  // };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.post('/api/form', {
      formData,
    });

    response.data.status === 200 ? set(true) : set(false);
    response.data.status === 200 ? toast.success(response.data.message) : toast.error(response.data.message);

    setFormData({
      naam: '',
      email: '',
      telefoonnummer: '',
      onderwerp: '',
      opmerking: '',
    });

    resetCheckboxes();

    console.log;
    setIsLoading(false);
  };

  const resetCheckboxes = () => {
    // Call resetCheckboxes function from CustomCheckboxWrapper component
    customCheckboxWrapperRef.current?.resetCheckboxes();
  };

  const customCheckboxWrapperRef = React.createRef<any>();

  return (
    <div className='flex flex-col items-center justify-center overflow-hidden pb-[202px] pt-[205px]'>
      <div>
        <Toaster />
      </div>
      <div className='absolute left-[48.5%] top-[50%] z-[2] hidden xl:block'>
        <div
          className={` h-[650px] w-[650px] rounded-full border-[#707070] bg-[${color}] bg-opacity-[0.1]`}
        ></div>
      </div>

      <div className='mb-[75px]'>
        <h1 className='text-[45px] font-semibold tracking-normal text-[#1C355C]'>
          {title}
        </h1>
      </div>
      <form className='shadow-form relative z-[5] max-w-[838px] rounded-[20px] border bg-white px-[15px] py-[48px] sm:pl-[96.96px] sm:pr-[76.96px]'>
        <div className='mb-[50px] flex h-full w-full justify-center'>
          <h3 className='text-[30px] font-semibold tracking-normal text-[#1C355C]'>
            {titleForm}
          </h3>
        </div>

        {/* naam & email */}
        <div className='lg: mb-[30px] flex flex-col gap-[19.91px] lg:flex-row'>
          <div className='flex flex-col gap-[15px]'>
            <label
              htmlFor='naam'
              className='text-[18px] font-semibold opacity-[0.75]'
            >
              Naam
            </label>
            <input
              type='text'
              name='naam'
              className='h-[60px] w-[332.09px] rounded-[10px]  border px-[29.91px] pb-[22px] pt-[20px] focus-visible:border-[#1C355C] focus-visible:outline'
              placeholder='Vul uw naam in'
              onChange={handleInputChange}
              value={formData.naam}
            />
          </div>

          <div className='flex flex-col gap-[15px]'>
            <label
              htmlFor='email'
              className='text-[18px] font-semibold opacity-[0.75]'
            >
              E-mailadres
            </label>
            <input
              type='email'
              name='email'
              className='h-[60px] w-[332.09px] rounded-[10px] border px-[29.91px] pb-[22px] pt-[20px] focus-visible:border-[#1C355C] focus-visible:outline'
              placeholder='Vul uw e-mailadres in'
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
        </div>

        {/* telefoonnummer */}

        <div className='mb-[30px] flex flex-col gap-[15px]'>
          <label
            htmlFor='telefoonnummer'
            className='text-[18px] font-semibold opacity-[0.75]'
          >
            Telefoonnummer
          </label>
          <input
            type='text'
            name='telefoonnummer'
            className='h-[60px] w-[332.09px] rounded-[10px] border px-[29.91px] pb-[22px] pt-[20px] focus-visible:border-[#1C355C] focus-visible:outline'
            placeholder='Vul uw telefoonnummer in'
            onChange={handleInputChange}
            value={formData.telefoonnummer}
          />
        </div>

        {/* onderwerp */}
        <CustomCheckboxWrapper
          ref={customCheckboxWrapperRef}
          onOnderwerpChange={(onderwerp: string) =>
            setFormData({ ...formData, onderwerp })
          }
        />

        {/* opmerking */}
        <div className='mt-[50px] flex flex-col gap-[15px]'>
          <label
            htmlFor='opmerking'
            className='text-[18px] font-semibold opacity-[0.75]'
          >
            Uw vraag/opmerking
          </label>
          <textarea
            name='opmerking'
            placeholder='Vul uw vraag in'
            onChange={handleInputChange}
            value={formData.opmerking}
            className='h-[166px] w-[323px] max-w-[664px] resize-none rounded-[10px] border px-[29.91px] py-[20px] focus-visible:border-[#1C355C] focus-visible:outline lg:w-[664px]'
          ></textarea>
        </div>

        <div className='mt-[18.09px]'>
          <button
            onClick={handleSubmitForm}
            className={`btn flex h-[60px] w-[322px] items-center justify-center rounded-[5px] border-none bg-[${color}] px-[115px] py-[18px] text-[20px] font-semibold tracking-normal text-white hover:bg-[${color}]`}
          >
            <span>
              {isLoading ? (
                <div className='loading loading-spinner loading-md'></div>
              ) : (
                'Verzenden'
              )}
            </span>
          </button>
        </div>

        {isLoading && (
          <span className='text-[#BFBFBF]'>Uw aanvraag wordt verstuurd</span>
        )}
        {responseMessage ? (
          <div
            role='alert'
            className={`alert mt-[15px] flex max-w-[322px] flex-row rounded-[10px] border-none text-white ${responseStatus ? 'bg-[#00aa6e] ' : 'bg-[#ff5861]'}`}
          >
            {responseStatus ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 shrink-0 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 shrink-0 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            )}
            <span>{responseMessage}</span>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
