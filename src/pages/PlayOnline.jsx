import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function PlayOnline() {
    return (
        <>
            <NavBar />

            <div className="w-[60%] mx-auto mt-[70px] mb-[90px]">
                <div className="">
                    <h3 className="text-[50px] font-medium">Play</h3>
                    <p className="text-xl font-normal text-white/80">Level up your skills with our online playground</p>
                </div>

                <div className="mt-[50px] rounded-lg overflow-hidden border border-white/10 flex flex-col gap-5">
                    <img src="/assets/pool1.jpg" className="w-full h-[500px] object-cover" width={500} height={500} alt="Game Preview" />

                    <div className="p-2 space-y-4">
                        <h3 className="text-xl font-semibold">8 ball poll</h3>
                        <p className="text-base font-normal text-white/80">Dive into our top extension picks for designers and how they can enhance your design workflow.</p>
                    </div>

                </div>

            </div>

            <Footer variant="custom" />
        </>
    )
}
