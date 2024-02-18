import Image from 'next/image';
import CarouselHekken from './components/CarouselHekken';
import BelOns from './components/BelComponent';
import FooterDesktop from './components/FooterDesktop';
import { FooterMobile } from './components/FooterMobile';
import BlauweBalk from './components/BlauweBalk';
import Reviews from './components/Reviews';
import Nieuws from './components/Nieuws';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';

export default function Home() {
  // const device = useDevice()

  return (
    <main className='h-full max-w-[1920px]'>
      <Navbar />

      {/* hero img */}
      <div className='h-[370px] overflow-x-hidden overflow-y-hidden sm:h-[unset]'>
        <div className='bg-hero-img sm:bg-hero-img-desktop relative  left-[-155px] top-[-232px] h-[602px] w-[901px] sm:left-0 sm:right-0 sm:top-[-600px] sm:h-[1281px] sm:w-[1920px]'></div>
      </div>

      <div className='relative top-[-294px] flex justify-center sm:top-[-1122px] sm:justify-start'>
        <div className=' flex flex-col px-[35px] text-center sm:left-0 sm:justify-center sm:px-0 sm:pl-[10%] sm:text-left lg:pl-[3%] xl:pl-[5%] 2xl:pl-[18.75%]'>
          <span className='bolt text-[46px]/[111px] font-black uppercase tracking-tight text-[#FFFFFF] '>
            beter laswerk
          </span>
          <span className='relative top-[-20px] mb-[30px] text-[23px] font-normal text-[#FFFFFF] sm:text-[32px]'>
            Sinds 1997
          </span>
          <div className='relative top-[-20px] w-full'>
            <div className='inline-flex w-fit items-center justify-center gap-[13.21px] border-b text-center text-[#FFFFFF]'>
              <span className='text-[14px]/[22px] '>Offerte aanvragen</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='relative top-[-201px] m-[35px] mt-[46px] flex flex-col items-center justify-center sm:top-[-814px] sm:gap-[35px] xl:flex-row xl:items-start'>
        {/* grijz blok met hekwerk */}
        <div className='bg-hek hovered mb-[35px] flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3] sm:h-[250px] sm:w-[575px]'>
          <div className='relative left-[47px] sm:top-[50px]'>
            <span className='text-[40px]/[104px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03] sm:text-[69px]/[179px]'>
              hekwerken
            </span>
            <div className='relative bottom-[3px] flex flex-row items-center sm:bottom-[39px]'>
              <span className='text-underline-card bottom-0 text-[22px] font-semibold tracking-tight text-[#1C355D]'>
                Hekwerken
              </span>
              <span className='relative right-[-139px] sm:right-[-357px] top-0'>
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

        {/* grijz blok met trap */}
        <div className='bg-trap hovered mb-[35px] flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3] sm:h-[250px] sm:w-[575px]'>
          <div className='relative left-[47px] sm:top-[50px]'>
            <span className='text-[40px]/[104px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03] sm:text-[69px]/[179px]'>
              constructies
            </span>
            <div className='relative bottom-[3px] flex  flex-row items-center sm:bottom-[39px]'>
              <span className='text-underline-card bottom-0 text-[22px] font-semibold tracking-tight text-[#1C355D]'>
                Constructies
              </span>
              <span className='relative right-[-139px] sm:right-[-345px]'>
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
      </div>

      {/* belas vof tekst */}
      <div className='relative top-[-237px] my-[80px] sm:top-[-207px]'>
        <div className='relative flex items-center justify-center sm:top-[-642px]   '>
          <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
            belas vof
          </h2>
        </div>

        {/* hekwerken & constructie tekst */}
        <div className='relative flex flex-col items-center justify-center sm:top-[-642px] '>
          <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
            Hekwerken & constructie
          </h3>
          <div className='max-w-[720px] px-[35px] py-[27px] text-center sm:flex sm:justify-center '>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>

      {/* Hekken tekst */}
      <div className='relative top-[-268px] sm:top-[-873px] flex flex-col items-center justify-center sm:items-start md:px-[180px] xl:px-[360px]'>
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

        <div className='max-w-[720px] px-[35px] py-[27px] text-center md:max-w-[360px] md:px-0 lg:text-left '>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </div>
      </div>

      <div className='relative top-[-268px] sm:top-[-873px] w-full overflow-x-hidden lg:pl-[3%] xl:pl-[5%] 2xl:pl-[18.75%]'>
        <CarouselHekken /> 
        <Portfolio />
        <Nieuws />
        <Reviews />
        <BlauweBalk />
        <BelOns />
        <FooterDesktop />
        <FooterMobile />
      </div>
    </main>
  );
}
