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
    <main
    // className='h-[calc(100vh - 4000px)]'
    >
      {/* hero img */}
      <div className='overflow-x-hidden '>
        <div className='bg-hero-img sm:bg-hero-img-desktop relative left-[-155px] top-[-103px] h-[602px] w-[901px] sm:left-0 sm:right-0 sm:top-[-600px] sm:h-[1281px] sm:w-[1920px]'></div>
      </div>

      <div className='relative top-[-373px] flex justify-center sm:top-[-1122px] sm:justify-start'>
        <div className=' flex flex-col px-[35px] text-center sm:left-0 sm:justify-center sm:px-0 sm:pl-[10%] sm:text-left lg:pl-[3%] xl:pl-[5%] 2xl:pl-[18.75%]'>
          <span className='bolt text-[46px] font-black uppercase tracking-tight text-[#FFFFFF] md:text-[64px]/[155px] '>
            beter laswerk
          </span>
          <span className='relative top-0 mb-[30px] text-[23px] font-normal text-[#FFFFFF] sm:text-[32px]'>
            Sinds 1997
          </span>
          <div className='relative w-full'>
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
      <Navbar />

      <div className='absolute top-[485px] w-full bg-white sm:top-[590px]'>
        <div className='relative  flex justify-center sm:top-[0px] '>
          <div className='relative flex flex-col items-center justify-between gap-[30px] p-[35px] pt-[30px] sm:gap-[35px] sm:pt-[46px] md:w-[1200px] xl:flex-row xl:items-start'>
            {/* grijz blok met hekwerk */}
            <div className='bg-hek hovered flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3] pb-[35px] sm:h-[250px] sm:w-[575px]'>
              <div className='w-[360px] px-[35px] pb-[26px]  sm:top-[50px] md:pt-[35px]'>
                <span className='text-[40px]/[104px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03] sm:text-[69px]/[179px]'>
                  hekwerken
                </span>
                <div className='relative bottom-[3px] flex flex-row items-center justify-between sm:bottom-[39px]'>
                  <span className='text-underline-card bottom-0 text-[22px] font-semibold tracking-tight text-[#1C355D]'>
                    Hekwerken
                  </span>
                  <span className=''>
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
              <div className='w-[360px] px-[35px] pb-[26px] sm:top-[50px] md:pt-[35px]'>
                <span className='text-[40px]/[104px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03] sm:text-[69px]/[179px]'>
                  constructies
                </span>
                <div className='relative bottom-[3px] flex flex-row items-center justify-between sm:bottom-[39px]'>
                  <span className='text-underline-card bottom-0 text-[22px] font-semibold tracking-tight text-[#1C355D]'>
                    Constructies
                  </span>
                  <span className=''>
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
        </div>
      </div>

      {/* belas vof tekst */}
      <div className='absolute left-0 right-0 top-[885px] flex justify-center sm:top-[1200px] xl:top-[995px]'>
        <div className=' '>
          <div className=' flex items-center justify-center    '>
            <span className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07] sm:text-[69px]'>
              belas vof
            </span>
          </div>

          {/* hekwerken & constructie tekst */}
          <div className=' flex flex-col items-center justify-center  '>
            <h2 className='text-[30px] font-semibold tracking-tight text-[#1C355D] sm:text-[45px]'>
              Hekwerken & constructie
            </h2>
            <div className='max-w-[720px] px-[35px] py-[27px] text-center text-[15px] sm:flex sm:justify-center'>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hekken tekst */}
      <div className='absolute left-0 right-0 top-[1186px] mt-[110px] flex justify-center sm:top-[1640px] sm:mt-[unset] sm:px-[35px] xl:top-[1435px]'>
        <div className='flex w-[1200px] flex-col items-center justify-center  sm:items-start'>
          <div className='flex w-full flex-row items-center justify-center lg:justify-between '>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <span className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07] sm:text-[69px] '>
                hekken
              </span>
              <h2 className='text-[30px] font-semibold tracking-tight text-[#1C355D] sm:text-[45px]'>
                Lorem ipsum dolor sit
              </h2>
            </div>
            <div className='relative bottom-[-42px] flex flex-row'>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='100px'
                height='180px'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className=' relative right-[-80px] top-[-7px] hidden lg:block'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#2B518D'
                  opacity='0.05'
                  stroke='none'
                >
                  <path
                    d='M490 1790 c-11 -11 -20 -28 -20 -38 0 -10 113 -180 250 -376 138
-197 250 -366 250 -376 0 -9 -110 -176 -245 -371 -166 -240 -245 -362 -245
-380 0 -55 16 -59 257 -59 205 0 222 1 246 20 28 22 530 743 541 776 7 24 29
-9 -293 457 -156 226 -242 342 -262 352 -22 12 -73 15 -244 15 -202 0 -216 -1
-235 -20z'
                  />
                </g>
              </svg>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='100px'
                height='180px'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className=' relative right-[-22px] top-[-7px] hidden lg:block'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#2B518D'
                  opacity='0.05'
                  stroke='none'
                >
                  <path
                    d='M490 1790 c-11 -11 -20 -28 -20 -38 0 -10 113 -180 250 -376 138
-197 250 -366 250 -376 0 -9 -110 -176 -245 -371 -166 -240 -245 -362 -245
-380 0 -55 16 -59 257 -59 205 0 222 1 246 20 28 22 530 743 541 776 7 24 29
-9 -293 457 -156 226 -242 342 -262 352 -22 12 -73 15 -244 15 -202 0 -216 -1
-235 -20z'
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className='flex justify-center w-full max-w-[unset] lg:max-w-[720px] px-[35px] py-[27px] text-center md:px-0 xl:text-left '>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </div>
      </div>

      <div className='absolute left-0  right-0 top-[1521px]  flex justify-center sm:top-[1961px] md:top-[1941px] xl:top-[1741px] '>
        <CarouselHekken />
      </div>

      <div className='absolute left-0 right-0 top-[2171px]  bg-[#193155]  px-[35px] sm:top-[2612px] sm:flex sm:justify-end sm:bg-[#ffffff] sm:px-[unset] md:top-[2583px] xl:top-[2383px]'>
        <Portfolio />
      </div>

      <div className='absolute left-0  right-0 top-[3498px] sm:top-[3989px] flex justify-center md:justify-start md:pl-[35px] lg:top-[3691px] xl:top-[3521px] lg:justify-center lg:pl-[unset]'>
        <Nieuws />
      </div>

      <div className='absolute left-0  right-0 top-[4092px] sm:top-[4634px] flex justify-center sm:max-w-[750px] md:top-[4803px] md:max-w-[unset] lg:top-[4339px]'>
        <Reviews />
      </div>

      <BelOns />

      <div className='absolute left-0 right-0 top-[4786px] sm:top-[5377px] md:top-[5562px]  lg:top-[5099px] h-[93%]'>
        <BlauweBalk />
        <FooterDesktop />
        <FooterMobile />
      </div>
    </main>
  );
}
