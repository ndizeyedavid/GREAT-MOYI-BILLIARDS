export default function SideAdvertisment() {
    return (
        <div className="hidden lg:block">
            {/* Left Side Ad */}
            <div className="fixed left-0 z-20 ml-4 -translate-y-1/2 top-[390px]">
                <div className="w-[160px] h-[600px] bg-gray-800/50 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 rotate-[-90deg]">Advertisement Space (160x600)</span>
                </div>
            </div>

            {/* Right Side Ad */}
            <div className="fixed right-0 z-20 mr-4 -translate-y-1/2 top-[390px]">
                <div className="w-[160px] h-[600px] bg-gray-800/50 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 rotate-[-90deg]">Advertisement Space (160x600)</span>
                </div>
            </div>
        </div>
    )
}