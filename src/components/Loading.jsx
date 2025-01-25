const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-orange-100 rounded-full border-t-orange-400 animate-spin"></div>
            <p className="mt-4 text-center text-gray-600">Thanks for vising ESSA Nyarugunga website <br />Please wait...</p>
        </div>
    );
};

export default Loading;
