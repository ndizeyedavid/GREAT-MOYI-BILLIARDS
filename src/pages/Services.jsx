import Navbar from "../components/Navbar";

export default function Services() {
    return (
        <>
            <Navbar />

            <div className="w-[80%] mx-auto">
                <h3 className="text-white text-[48px] font-semibold text-center">About & Services</h3>

                <div className="grid grid-flow-col">
                    <div>
                        <span>Great Moyi</span>
                    </div>

                    <div>
                        <h3>More about the founder</h3>
                    </div>
                </div>

            </div>

        </>
    )
}
