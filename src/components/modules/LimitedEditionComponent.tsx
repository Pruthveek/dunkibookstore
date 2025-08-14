import React from 'react'
import Timer from '../ui/Timer'
import CustomButton from '../ui/Buttons'
import Image from 'next/image'

export default function LimitedEditionComponent() {
  return (
    <div className='section-container bg-[#F6F6F6]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='space-y-10 m-4 md:m-20'>
                <p className='text-5xl'>Shop limited edition collaborations</p>
                <Timer/>
                <CustomButton variant='secondary' size='xl' >Shop Now</CustomButton>
            </div>
            <div className='px-auto relative size-60 md:size-[500px]'>
                <Image src="/Images/authors/jhjhj_66f84977-da32-438e-867d-05a07f41a4f3.png" alt='books' fill className='bg-cover'></Image>
            </div>
        </div>
    </div>
  )
}
