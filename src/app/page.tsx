import Image from 'next/image';
import Link from 'next/link';
import CarouselHekken from './components/CarouselHekken';
import BelOns from './components/BelComponent';
import CarouselPortfolio from './components/CarouselPortfolio';
import CarouselNieuws from './components/CarouselNieuws';
import CarouselReview from './components/CarouselReview';

export default function Home() {
  return (
    <main className='h-full max-w-[1920]'>
      {/* grijze top bar */}
      <div className='z-10 flex h-[55px] w-full items-center justify-center bg-[#F5F5F6] sm:bg-[#40494E] sm:bg-opacity-[0.05]'>
        <ul className=' flex justify-center sm:gap-5'>
          <li className='hidden gap-1 text-[15px]/[50px] sm:flex'>
            <Image src='star_icon.svg' alt='star' width={15} height={15} />
            <Image src='star_icon.svg' alt='star' width={15} height={15} />
            <Image src='star_icon.svg' alt='star' width={15} height={15} />
            <Image src='star_icon.svg' alt='star' width={15} height={15} />
            <Image src='star_icon.svg' alt='star' width={15} height={15} />
            5,0
          </li>
          <li className='flex gap-1 text-[15px]/[50px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            100% Nederlands product!
          </li>
          <li className='hidden gap-1 text-[15px]/[50px] sm:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Eigen fabriek
          </li>
          <li className='hidden gap-1 text-[15px]/[50px] sm:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Productie op maat
          </li>
          <li className='hidden gap-1 text-[15px]/[50px] sm:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Korte lijnen
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] sm:flex' href={''}>
              Projecten
            </Link>
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] sm:flex' href={''}>
              Kennisbank
            </Link>
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] sm:flex' href={''}>
              Klantenservice
            </Link>
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] sm:flex' href={''}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* menu bar */}
      <div className='z-10 flex h-[73px] w-full  items-center justify-center bg-[#FFFFFF] shadow-sm shadow-[#4E4E4E15]'>
        <div className='z-10 mr-[173px] mt-[13px] hidden bg-white px-[30px] py-[16px] sm:block'>
          <Image
            src={
              'https://belas.s3.eu-north-1.amazonaws.com/belas-new/belas_logo.webp'
            }
            width={111}
            height={83}
            alt='belas VOF logo'
            className='rounded-[5px] '
          />
        </div>
        <ul className='hidden items-center justify-center gap-7 sm:flex'>
          <li>
            <Link className='text-[18px]/[43px] font-semibold' href={''}>
              Aluminium hekken
            </Link>
          </li>
          <li>
            <Link className='text-[18px]/[43px] font-semibold' href={''}>
              Stalen hekken
            </Link>
          </li>
          <li>
            <Link className='text-[18px]/[43px] font-semibold' href={''}>
              Constructies
            </Link>
          </li>
          <li>
            <Link className='text-[18px]/[43px] font-semibold' href={''}>
              Machine bouw
            </Link>
          </li>
          <div className='btn rounded-[5px] bg-[#E98A14] text-[18px]/[43px] font-semibold text-white hover:bg-[#E98A14] hover:opacity-90'>
            Offerte aanvragen
          </div>
        </ul>
        <ul className='flex w-full flex-row items-center justify-center gap-[10px]'>
          <li>
            <Link href={''}>
              <div className='btn w-[169px] rounded-[5px] border-none bg-[#E4E4E4]'>
                <Image
                  src={
                    'https://belas.s3.eu-north-1.amazonaws.com/belas-new/belas_logo.webp'
                  }
                  width={45}
                  height={169}
                  alt='belas VOF logo'
                  className='rounded-[5px] '
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href={''}>
              <div className='btn w-[126px] rounded-[5px] bg-[#E98A14] text-[18px]/[43px] font-semibold text-white hover:bg-[#E98A14] hover:opacity-90'>
                Offerte
              </div>
            </Link>
          </li>
          <li>
            <Link href={''}>
              <div className='btn flex h-[45px] w-[45px] flex-col content-center items-end rounded-[5px] border-none bg-[#1A3055] hover:bg-[#1A3055]'>
                <span className='w-[20px] border border-solid border-[#E4E4E4]'></span>
                <span className='w-[11px] border border-solid border-[#E4E4E4]'></span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* hero img */}
      <div className='bg-hero-img-local zoom bg-hero-img-css h-[370px] w-[430px] bg-hero-img-gradient bg-[38%_111%]'>
        <div className='flex h-full w-full flex-col items-center pt-[90px] '>
          <span className='bolt text-[46px]/[80px] font-black uppercase tracking-tight text-[#FFFFFF]'>
            beter laswerk
          </span>
          <span className='mb-[30px] text-[23px] font-normal text-[#FFFFFF]'>
            Sinds 1997
          </span>
          <span className='border-b text-[14px]/[22px] text-[#FFFFFF] '>
            offerte aanvragen &gt;
          </span>
        </div>

        <div className='m-[35px]'>
          {/* grijz blok met hekwerk */}
          <div className='bg-hek mb-[35px] flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3]'>
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
                  className=''
                />
              </span>
            </div>
          </div>

          {/* grijz blok met trap */}
          <div className='bg-trap mb-[35px] flex h-[160px] w-full flex-col rounded-[5px] bg-[#E9EDF3]'>
            <span className='pb-[15px] pl-[35px] pt-[25px] text-[40px] font-black uppercase tracking-tight text-[#1C355D] text-opacity-[0.03]'>
              constructie
            </span>
            <div className='flex justify-between pr-[35px]'>
              <span className='pb-[26px] pl-[35px] text-[22px] font-semibold tracking-tight text-[#1C355D]'>
                Constructie
              </span>
              <span className='flex items-center pb-[26px] pl-[35px]'>
                <Image
                  src='chevron.svg'
                  width={20}
                  height={23}
                  alt='chevron'
                  className=''
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
        <div className='flex items-center justify-center'>
          <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
            Hekwerken & constructie
          </h3>
        </div>
        <div className='px-[35px] py-[27px] text-center'>
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

        {/* Hekken tekst */}
        <div className='flex flex-col items-center justify-center pt-[50px]'>
          <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
            hekken
          </h2>
          <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
            Lorem ipsum dolor sit
          </h3>
          <p className='px-[35px] py-[27px] text-center'>
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

        <CarouselHekken />

        <div className='h-[1221px] rounded-[5px] bg-[#193155] px-[35px] py-[80px]'>
          <div className='flex justify-center'>
            <h2 className=' text-[51px] font-black uppercase tracking-tight text-white opacity-[0.07]'>
              Portfolio
            </h2>
          </div>
          <div className='mb-[40px] flex justify-center'>
            <h3 className='text-[30px] font-semibold tracking-tight text-white'>
              Eerder leverde wij...
            </h3>
          </div>

          <div className='mb-[40px]'>
            <p className='flex text-center text-[15px] text-white'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <CarouselPortfolio />
        </div>

        <div className='mt-[80px] '>
          <div className='flex justify-center'>
            <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
              Nieuws
            </h2>
          </div>
          <div className='mb-[27px] flex justify-center'>
            <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
              Blijft u op de hoogte?
            </h3>
          </div>
          <div className='mb-[40px] px-[35px]'>
            <p className='flex text-center text-[15px] text-[#1C355D]'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>

          <div className='mb-[80px]'>
            <CarouselNieuws />
          </div>
        </div>

        <div className='mb-[120px]  mt-[80px]'>
          <div className='flex justify-center'>
            <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
              Reviews
            </h2>
          </div>
          <div className='flex justify-center'>
            <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
              Onze klanten zeggen...
            </h3>
          </div>
          <CarouselReview />
        </div>

        <div className=' relative z-20 h-[232px] bg-[#1A3055] px-[35px] pt-[63px]'>
          <div className='flex flex-row gap-[30px]'>
            <div className='min-w-[212px] text-white'>
              <h3 className='text-[34px]/[34px] font-semibold tracking-tight'>
                Bakkie doen?
              </h3>
              <h4 className='text-[20px] font-medium tracking-tight'>
                Kom gerust bij ons langs
              </h4>
              <div className='w-[109px] border-b'>
                <span className='text-[10px]/[30px] font-light'>
                  Een afspraak maken
                  <span className='ml-4'>&gt;</span>
                </span>
              </div>
            </div>
            {/* avatar */}
            <div className='container'>
              <div className='box'>
                <div className='circle'>
                  <Image
                    src='/man_met_koffie.webp'
                    width={450}
                    height={450}
                    alt='Man met koffie'
                    className='image'
                  />
                </div>
                <Image
                  src='/man_met_koffie.webp'
                  width={1000}
                  height={141}
                  alt='Man met koffie'
                  className='image'
                />
              </div>
            </div>
          </div>
        </div>

        <BelOns />

        <div className='relative bottom-[313px] z-20 bg-[#182228]'>
          <div className='flex flex-col justify-center px-[35px]'>
            <h2 className='mt-[29px] text-[73px] font-black uppercase tracking-tight text-[#FFFFFF] opacity-[0.03]'>
              Belas VOF
            </h2>
            <div className='relative bottom-[50px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
              <h4>Belas VOF</h4>
            </div>

            <div className='max-w-[317px]'>
              <p className='text-[15px]/[35px] font-normal tracking-tight text-white'>
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

            <div className='mb-[45px] mt-[80px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
              <h4>Service</h4>
            </div>
            <div className='flex flex-row gap-[80px] text-[15px]/[35px] font-normal tracking-tight text-white '>
              <div className=''>
                <ul>
                  <li>
                    <Link href={''}>Klantenservice</Link>
                  </li>
                  <li>
                    <Link href={''}>Blog</Link>
                  </li>
                  <li>
                    <Link href={''}>Kennisbank</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link href={''}>Voorraad</Link>
                  </li>
                  <li>
                    <Link href={''}>Reperatie</Link>
                  </li>
                  <li>
                    <Link href={''}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mb-[45px] mt-[80px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
              <h4>Kom langs!</h4>
            </div>
            <div className='flex flex-row gap-[80px] border-b-[1px] border-white border-opacity-20 pb-[80px] text-[15px]/[25px] font-normal tracking-tight text-white '>
              <div className=''>
                <ul>
                  <li>
                    <span>Belas Badhoevedorp</span>
                  </li>
                  <li>
                    <span>Sloterweg 411 b</span>
                  </li>
                  <li>
                    <span>1171 VD Badhoevedorp</span>
                  </li>
                  <li>
                    <span>Nederland</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Tel: 020 659 67 78</li>
                  <li>Mail: info@belasvof.nl</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col py-[35px] text-[15px]/[25px] font-normal tracking-tight text-white'>
              <span>© 2024 | Website ontwikkeld door SAM Online</span>
              <span>Marketing & Webdesign.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
