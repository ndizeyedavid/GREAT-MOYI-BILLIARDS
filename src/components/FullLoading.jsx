
export default function FullLoading() {
    return (
        <div className="flex items-center justify-center h-screen bg-black/20 backdrop:blur-3xl">
            <div className=" w-[300px] h-[300px] border-[5px] mx-auto border-gray-200 border-t-[#b70e4e] rounded-full" id="spinner"></div>
        </div>
    )
}
