import React from 'react';
import Navbar from '../../components/Navbar';
import FooterDesktop from '../../components/FooterDesktop';
import { FooterMobile } from '../../components/FooterMobile';
import BlauweBalk from '../../components/BlauweBalk';
import BelOns from '../../components/BelComponent';
import CardNieuws from '@/app/components/CardNieuws';
import BlogList from '@/app/components/BlogList';

const BlogPost = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>

      <Navbar />
      <BlogList/>
      
      <div className='flex justify-center'>
        <div className='mb-[300px] mt-[205px] flex flex-col justify-center sm:top-[1640px] sm:px-[35px]'>
          <div className='flex w-[1200px] flex-col items-center justify-center  sm:items-start'>
            <div className='flex w-full flex-row items-center justify-center lg:justify-between '>
              <div className='flex flex-col items-center justify-center lg:items-start'>
                <h2 className='text-[30px] font-semibold tracking-normal text-[#1C355D] sm:text-[35px]'>
                  Hier komt de titel van de blog
                </h2>
              </div>
              <div className='relative flex flex-row'>
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

            <div className='flex gap-[9px]'>
              <div className='rounded-[7px] border border-[#848484] pb-[10px] pl-[20px] pr-[21px] pt-[9px] opacity-[0.5]'>
                <span>Auteur: Matthias</span>
              </div>
              <div className='rounded-[7px] border border-[#848484] pb-[10px] pl-[20px] pr-[18px] pt-[9px] opacity-[0.5]'>
                <span>Geplaatst op: 11 juni 2023</span>
              </div>
            </div>

            <div className='flex w-full max-w-[unset] justify-center px-[35px] py-[27px] text-center md:px-0 lg:max-w-[750px] xl:text-left '>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>

            </div>

            <div className='mb-[49px] h-[294px] w-[750px] rounded-[10px] border-[#707070] bg-[#1F2739]'></div>

            <div className='max-w-[750px] text-[#1F2739]'>
              <div>
                <h3 className='text-[20px] font-semibold tracking-normal'>
                  Lorem ipsum dolor sit amet, consetetur
                </h3>
              </div>

              <br />

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et
                </p>
              </div>

              <br />

              <div>
                <h3 className='text-[20px] font-semibold tracking-normal text-[#1F2739]'>
                  Lorem ipsum dolor sit amet, consetetur
                </h3>
              </div>

              <br />

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam
                </p>
              </div>

              <br />

              <div>
                <h3 className='text-[20px] font-semibold tracking-normal text-[#1F2739]'>
                  Lorem ipsum dolor sit amet, consetetur
                </h3>
              </div>

              <br />

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className=' mt-[100px] flex gap-[21px] relative z-10'>
            <CardNieuws
              key={10}
              imgSrc='project3.jpg'
              title='Hier komt de titel van het blog'
              imgBgClass={'bg-[#182228]'}
              href='/blog/10'
              extendedClass='max-w-[386px] max-h-[307px]'
            />

            <CardNieuws
              key={11}
              imgSrc='project4.jpg'
              title='Hier komt de titel van het blog'
              imgBgClass={'bg-[#182228]'}
              href='/blog/11'
              extendedClass='max-w-[386px] max-h-[307px]'
            />

            <CardNieuws
              key={12}
              imgSrc='project6.jpg'
              title='Hier komt de titel van het blog'
              imgBgClass={'bg-[#182228]'}
              href='/blog/12'
              extendedClass='max-w-[386px] max-h-[305px]'
            />
          </div>
          
        </div>

    
      </div>

      <BelOns />
      <BlauweBalk />
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
};

export default BlogPost;
