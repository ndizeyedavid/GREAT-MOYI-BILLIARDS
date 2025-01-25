import Illustration from "/assets/illustrations/1.svg"

export default function Globe({ flip }) {
    return (
        <>
            <div className={`absolute h-full w-[150px] ${!flip ? "left-[400px] top-[-20px]" : "right-[300px] bottom-[-30px]"}`}>
                <img src={Illustration} alt="globe" className={`relative object-cover ${!flip ? "w-[60px] h-[60px]" : "w-[40px] h-[40px]"} opacity-60`} style={{ borderRadius: "10px 0 0 10px" }} />
            </div>
        </>
    )
}
