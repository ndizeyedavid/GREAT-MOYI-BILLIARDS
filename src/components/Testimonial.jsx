import Male from '/assets/users/male-1.svg'
import Female from '/assets/users/female-1.svg'
import RatingStar from './Figures/RatingStar'
export default function Testimonial({ gender, name, message }) {
    return (
        <div className='h-[562px] w-[400px] lg:w-[90%] lg:mx-auto lg:h-fit p-[50px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start  items-center gap-[20px] inline-flex overflow-hidden'>

            {/* TODO: Profile <s>pic</s> => icon✅ */}
            <div className='flex flex-col justify-center items-center gap-[20px] lg:flex-row'>
                <div className='h-20 p-2.5 bg-[#fff5ef] rounded-[100px] border border-[#333333] justify-start items-start gap-2.5 inline-flex'>
                    <img src={gender == "male" ? Male : Female} className='object-cover w-full h-full' alt="User" />
                </div>

                {/* Testim name✅ */}
                <div className='flex-col justify-start items-center gap-[20px] flex lg:items-start lg:gap-[10px]'>
                    <h3 className="text-center text-[#333333] text-2xl font-semibold leading-9">{name}</h3>

                    {/* TODO:Ratings✅ */}
                    <div className='flex items-center justify-center'>
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                    </div>
                </div>
            </div>

            {/* message✅ */}
            <p className='text-center text-[#333333] text-xl font-medium leading-[30px]'>{message}</p>
        </div>
    )
}
