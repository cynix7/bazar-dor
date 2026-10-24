const Loading = () => {
    return (
        <main className="flex flex-1 items-center justify-center bg-[#F0F5F1] px-4 py-16">
            <div className="flex w-full max-w-sm flex-col items-center rounded-3xl border border-[#E1EAE3] bg-[#FAFCFA] px-8 py-12 shadow-sm">

            
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
                    <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-[#E1EAE3] border-t-[#008C45]" />

                    <span className="text-2xl" aria-hidden="true">
                        🥬
                    </span>
                </div>

                
                <h2 className="text-lg font-bold text-[#1D271F]">
                    লোড হচ্ছে...
                </h2>

                <p className="mt-2 text-center text-sm leading-6 text-[#6B756D]">
                    অনুগ্রহ করে অপেক্ষা করুন, বাজারদরের তথ্য আনা হচ্ছে।
                </p>

               
                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#E5F3E9]">
                    <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#008C45]" />
                </div>

            </div>
        </main>
    );
};

export default Loading;
