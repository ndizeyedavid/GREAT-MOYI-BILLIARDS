import React from 'react'

function Container({ children }) {
    return (
        // plan b
        // <div className='w-[95%] mx-auto mt-[40px] flex flex-col gap-[180px]'> 
        <div className='w-[95%] mx-auto mt-[40px]'>
            {children}
        </div>
    )
}

export default Container
