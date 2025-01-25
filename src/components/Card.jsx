import React from 'react'
// import Test from '/assets/icons/graduate.svg'

const Card = ({ icon, heading, details, category }) => {
  return (
    // <div className='w-[400px] h-[300px] bg-red-200'>
    <div className={`relative ${category == "about" ? "h-[270px]" : category == "aboutpage" ? "h-[400px]" : "h-[300px]"} px-[30px] pt-14 pb-[50px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start items-start gap-5 inline-flex`}>
      {/* icon✅ */}
      <div className='absolute h-[74px] p-5 bg-[#ffdecc] rounded-xl border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex -top-10'>
        <img src={icon} alt='icon' />
      </div>

      <div className="self-stretch text-[#191919] text-[28px] font-bold leading-9">{heading}</div>
      <div className="self-stretch text-[#4c4c4c] text-xl font-medium leading-[30px]">{details}</div>
    </div>
  )
}

export default Card
