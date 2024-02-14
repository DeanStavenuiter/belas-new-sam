import Image from 'next/image';
import Link from 'next/link';
import CarouselHekken from './components/CarouselHekken';
import BelOns from './components/BelComponent';
import CarouselPortfolio from './components/CarouselPortfolio';
import CarouselNieuws from './components/CarouselNieuws';
import CarouselReview from './components/CarouselReview';
import useDevice from '../functions/UseDevice';
import FooterDesktop from './components/FooterDesktop';
import { FooterMobile } from './components/FooterMobile';
import BlauweBalk from './components/BlauweBalk';
import Reviews from './components/Reviews';
import Nieuws from './components/Nieuws';
import Portfolio from './components/Portfolio';
import GrijzeBar from './components/GrijzeBar';
import Navbar from './components/Navbar';

export default function Home() {
  // const device = useDevice()

  return (
    <main className='h-full max-w-[1920]'>
      <Navbar />

      {/* hero img */}
      <div className='bg-hero-img h-[370px] w-full sm:mt-[-72px] '>
        <div className='flex w-full flex-col items-center pt-[90px] sm:items-start sm:pl-[25%]'>
          <span className='bolt text-[46px]/[80px] font-black uppercase tracking-tight text-[#FFFFFF] '>
            beter laswerk
          </span>
          <span className='mb-[30px] text-[23px] font-normal text-[#FFFFFF]'>
            Sinds 1997
          </span>
          <span className='border-b text-[14px]/[22px] text-[#FFFFFF] '>
            offerte aanvragen &gt;
          </span>
        </div>
      </div>

      <div className='m-[35px] flex flex-col sm:flex-row  sm:justify-center sm:gap-[35px]'>
        {/* grijz blok met hekwerk */}
        <div className='bg-hek hovered mb-[35px] flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3] sm:max-w-[575px]'>
          <span className='pb-[15px] pl-[35px] pt-[25px] text-[40px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03]'>
            hekwerk
          </span>
          <div className='flex justify-between pr-[35px]'>
            <span className='pb-[26px] pl-[35px] text-[22px] font-semibold tracking-tight text-[#1C355D]'>
              Hekwerk
            </span>
            <span className='flex items-center pb-[26px] pl-[35px]'>
              <Image
                src='chevron.svg'
                width={20}
                height={23}
                alt='chevron'
                className='sm:hidden'
              />
              <Image
                src='chevron.svg'
                width={30}
                height={33}
                alt='chevron'
                className='chevron-animation hidden sm:block'
              />
            </span>
          </div>
        </div>

        {/* grijz blok met trap */}
        <div className='bg-trap hovered mb-[35px] flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3] sm:max-w-[575px]'>
          <span className='pb-[15px] pl-[35px] pt-[25px] text-[40px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03]'>
            constructies
          </span>
          <div className='flex justify-between pr-[35px]'>
            <span className='pb-[26px] pl-[35px] text-[22px] font-semibold tracking-tight text-[#1C355D] hover:underline'>
              Constructies
            </span>
            <span className='sm:w- flex items-center pb-[26px] pl-[35px]'>
              <Image
                src='chevron.svg'
                width={20}
                height={23}
                alt='chevron'
                className='sm:hidden'
              />
              <Image
                src='chevron.svg'
                width={30}
                height={33}
                alt='chevron'
                className='chevron-animation hidden sm:block'
              />
            </span>
          </div>
        </div>
      </div>

      {/* belas vof tekst */}
      <div className='mb-[18px] mt-[27px] flex items-center justify-center   '>
        <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
          belas vof
        </h2>
      </div>

      {/* hekwerken & constructie tekst */}
      <div className='flex flex-col items-center justify-center '>
        <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
          Hekwerken & constructie
        </h3>
        <div className='max-w-[720px] px-[35px] py-[27px] text-center sm:flex sm:justify-center '>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </div>

      {/* Hekken tekst */}
      <div className='flex flex-col items-center justify-center pt-[50px] sm:items-start md:px-[180px] xl:px-[360px]'>
        <div className='flex w-full flex-row items-center justify-center md:justify-between '>
          <div className='flex flex-col items-center justify-center md:items-start'>
            <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07] '>
              hekken
            </h2>
            <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
              Lorem ipsum dolor sit
            </h3>
          </div>
          <div className='flex flex-row'>
            <Image
              src='chevron.svg'
              width={80}
              height={120}
              alt='chevron'
              className=' relative right-[-51px] hidden md:block'
            />
            <Image
              src='chevron.svg'
              width={80}
              height={120}
              alt='chevron'
              className=' relative hidden md:block'
            />
          </div>
        </div>

        <div className='max-w-[720px] px-[35px] py-[27px] text-center md:max-w-[360px] md:pl-0 md:text-left '>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </div>

      <CarouselHekken />

      <Portfolio />

      <Nieuws />

      <Reviews />
      <BlauweBalk />

      <BelOns />
      <FooterDesktop />
      <FooterMobile />
    </main>
  );
}
