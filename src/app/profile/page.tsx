"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
        const user = session?.user;
        const handleSignOut = async () => {
        await authClient.signOut();
    }
    const onSubmit=async(e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const user= Object.fromEntries(formData.entries()) as {name:string, email:string,password:string, };
        await authClient.updateUser({
            ...user,
        });}
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center'>
                <div className='w-md'>
                <h2 className='text-xl font-bold mt-8'>আমার প্রোফাইল</h2>
            <p className='text-xs text-gray-500'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex justify-between items-center bg-base-100 my-4 p-8 rounded-lg w-md '>
                <div>
                    <h2 className='text-md font-bold'>{user?.name}</h2>
                        <p className='text-xs text-gray-500'>{user?.email}</p>
                </div>
                <button onClick={handleSignOut} className='cursor-pointer hover:bg-gray-100 text-sm font-semibold py-1 px-2 text-red-600 border border-red-600 rounded-xl'>↩ সাইন আউট</button>
            </div>
            </div>
            <div>
                <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 mt-4">
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