import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GrijzeBar = () => {
  return (
    <>
    <div className='relative top-0 z-20 flex h-[55px] w-full items-center justify-center bg-[#F5F5F6] sm:bg-[#40494E] sm:bg-opacity-[0.05]'>
        <ul className=' flex justify-center sm:gap-5'>
          <li className='hidden gap-1 text-[15px]/[50px] lg:flex'>
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
          <li className='hidden gap-1 text-[15px]/[50px] lg:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Eigen fabriek
          </li>
          <li className='hidden gap-1 text-[15px]/[50px] lg:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Productie op maat
          </li>
          <li className='hidden gap-1 text-[15px]/[50px] lg:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Korte lijnen
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] lg:flex' href={''}>
              Projecten
            </Link>
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] lg:flex' href={''}>
              Kennisbank
            </Link>
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] lg:flex' href={''}>
              Klantenservice
            </Link>
          </li>
          <li>
            <Link className='hidden text-[15px]/[50px] lg:flex' href={''}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default GrijzeBar