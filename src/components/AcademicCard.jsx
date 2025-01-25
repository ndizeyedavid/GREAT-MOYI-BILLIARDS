import React from 'react'
// import Test from '/assets/hero.webp'

const AcademicCard = ({ image, title, details }) => {
  return (
    <div className='relative p-[44px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex flex-col items-center justify-center gap-[30px]'>

      {/* TODO: Course image */}
      <div className='h-[310px] z-50 w-[370px] rounded-xl border-2 border-neutral-800 overflow-hidden'>
        {/* DaFuq!!! why didn't I ever know the use of overflow-hidden👆 */}
        <img src={image} className='object-cover w-full h-full' alt="Course thumbnail" />
      </div>

      {/* Background figure */}
      <div className='w-[125px] h-[370px] bg-[#ffeee5] rounded-bl-xl rounded-br-xl border-2 border-neutral-800 absolute top-0 z-0'></div>

      {/* course details  */}
      <div className='w-full space-y-4 text-center'>
        <h3 className='text-center text-[#191919] text-[28px] font-semibold leading-9'>{title}</h3>
        <p className='text-center text-[#4c4c4c] text-xl font-medium leading-[30px]'>{details}</p>
      </div>
    </div>
  )
}

export default AcademicCard
