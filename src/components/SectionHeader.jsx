
export default function SectionHeader({ semiHeading, Heading, children }) {
    return (
        <div className="mt-[130px] w-full flex items-center flex-col gap-[19px] mb-[100px]">
            {/* semi-heading */}
            <div className="h-[47px] px-5 py-2.5 bg-white rounded-lg border-2 border-black justify-start items-start gap-2.5 inline-flex overflow-hidden">
                <span className="text-center text-text-20 text-lg font-semibold leading-[27px]">{semiHeading}</span>
            </div>

            {/* heading */}
            <h1 className="text-center text-text-15 text-[58px] font-bold leading-[75.40px]">{Heading}</h1>

            {/* more-details */}
            <p className="text-center text-text-15 text-xl font-medium leading-[30px]">{children}</p>
        </div>
    )
}
