import React from 'react';

const signInPage = () => {
    return (
         <div className='m-8'>
            <form className='flex flex-col justify-center items-center'>
                <h2 className='text-xl font-bold'>সাইন ইন</h2>
                    <p className='text-xs'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">

                    <label className="label">ইমেইল</label>
                    <input type="email" className="input" placeholder="you@example.com" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <button className="btn bg-green-600 mt-4 text-white">সাইন ইন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default signInPage;