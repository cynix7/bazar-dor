"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const handleSignOut = async () => {
        const {error}=await authClient.signOut();
        if (error) {
        toast.error("সাইন আউট করা যায়নি!");
        return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    }
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string, };
       const{data,error}= await authClient.updateUser({
            ...user,
        });
        if(data){
            toast.success("আপনার তথ্য সফলভাবে আপডেট হয়েছে!")
            // toast.success("সফলভাবে সাইন আউট হয়েছে!")
        }
        if (error) {
        toast.error(error.message || "তথ্য আপডেট করা যায়নি!");
        return;
    }
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center'>
                <div className='w-full max-w-md'>
                    <h2 className='text-xl font-bold mt-8'>আমার প্রোফাইল</h2>
                    <p className='text-xs text-gray-500'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 gap-2.5 sm:flex justify-between items-center bg-base-100 my-4 p-8 rounded-lg w-full max-w-md'>
                    <div>
                        <h2 className='text-md font-bold'>{user?.name}</h2>
                        <p className='text-xs text-gray-500'>{user?.email}</p>
                    </div>
                    <button onClick={handleSignOut} className='cursor-pointer hover:bg-gray-100 text-sm font-semibold py-1 px-2 text-red-600 border border-red-600 rounded-xl'>↩ সাইন আউট</button>
                </div>
            </div>
            <div>
                <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-4 mt-4">
                        <p className='font-bold'>তথ্য</p>


                        <label className="label">নাম</label>
                        <input name='name' type="text" className="input w-full" placeholder="যেমন: রহিম উদ্দিন" />

                        <button type='submit' className="btn bg-green-600 mt-4 text-white">আপডেট</button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;