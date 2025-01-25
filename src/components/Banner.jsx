import React from 'react'
import Edge from './Figures/Edge'
import Globe from './Figures/Globe'
function Banner() {
    return (
        <div className="w-[98%] mx-auto">
            <div className="relative bg-primary-90 flex items-center justify-between mt-4 border-2 border-black rounded-xl h-[58px] w-full overflow-hidden">
                <Edge flip={false} />

                <Globe flip={false} />

                <p className='z-50 w-full text-base font-semibold text-center'>Admissions are Open, Register your child</p>

                <Globe flip={true} />

                <Edge flip={true} />
            </div>
        </div>
    )
}

export default Banner
