import Image from 'next/image';
import Link from 'next/link';

interface CardPortfolioProps {
  nameProject: string;
  imgBgClass: string;
  href: string;
}

const CardPortfolio = ({ nameProject, imgBgClass, href }: CardPortfolioProps) => {
  return (
    <div className='relative'>
      <Link href={href} >
      <div className={`h-[346px] w-[360px] ${imgBgClass} rounded-[5px]`}>
        <div className='absolute bottom-0 right-0 left-0 w-[360px] pl-[27px] pb-[27px] pr-[35px]'>
          <div className='flex justify-between w-full'>
            <span className='text-[22px]/[48px] font-semibold text-white '>
              {nameProject}
            </span>
            <span className='flex items-center'>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='28.000000pt'
                height='28.000000pt'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#FFFFFF'
                  opacity='0.2'
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
            </span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardPortfolio;
