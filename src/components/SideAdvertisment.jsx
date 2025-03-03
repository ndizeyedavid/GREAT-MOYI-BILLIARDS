import pb from "../utils/pocketbase";

export default function SideAdvertisment({ ads }) {



    return (
        <div className="hidden lg:block">
            {/* Left Side Ad */}
            {ads.vertical1 != "" &&
                <div className="fixed left-0 z-20 ml-4 -translate-y-1/2 top-[390px]">
                    <div className="w-[160px] h-[600px] bg-gray-800/50 rounded-md overflow-hidden flex items-center justify-center">

                        <img src={pb.files.getURL(ads, ads.vertical1)} className="object-cover w-full h-full" alt="Ads" />
                    </div>
                </div>
            }

            {/* Right Side Ad */}
            {ads.vertical2 != "" &&
                <div className="fixed right-0 z-20 mr-4 -translate-y-1/2 top-[390px]">
                    <div className="w-[160px] h-[600px] bg-gray-800/50 overflow-hidden rounded-md flex items-center justify-center">

                        <img src={pb.files.getURL(ads, ads.vertical2)} className="object-cover w-full h-full" alt="Ads" />
                    </div>
                </div>
            }
        </div>
    )
}