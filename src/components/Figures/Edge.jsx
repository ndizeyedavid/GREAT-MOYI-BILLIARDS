import Illustration from "/assets/illustrations/3.svg"

export default function Edge({ flip }) {
    return (
        <>
            <div className={`absolute h-full w-[140px] ${!flip ? "left-0" : "right-0"}`} style={!flip ? null : { transform: "scaleX(-1)" }}>
                <img src={Illustration} alt="edge" className='object-cover w-full h-full opacity-60' style={{ objectPosition: "100% 70%", borderRadius: "10px 0 0 10px" }} />
            </div>
        </>
    )
}
