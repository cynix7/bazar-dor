import Link from 'next/link';

const NotFound = () => {
    return (
        <main className="flex flex-1 items-center justify-center bg-[#F0F5F1] px-4 py-16">
            <div className="w-full max-w-xl rounded-3xl border border-[#E1EAE3] bg-[#FAFCFA] px-6 py-12 text-center shadow-sm sm:px-12">

                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#E5F3E9] text-5xl">
                    🥬
                </div>

                <p className="mb-3 inline-block rounded-full bg-[#E5F3E9] px-4 py-1.5 text-sm font-semibold text-[#008C45]">
                    Error 404
                </p>

                <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1D271F] sm:text-3xl">
                    পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
                </h1>

                <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-[#6B756D] sm:text-base">
                    দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন, সেটি খুঁজে পাওয়া যাচ্ছে না।
                    হয়তো ঠিকানাটি ভুল, অথবা পৃষ্ঠাটি সরিয়ে ফেলা হয়েছে।
                </p>

                <Link
                    href="/"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#008C45] px-6 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#00743A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008C45]"
                >
                    <span aria-hidden="true">←</span>
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
