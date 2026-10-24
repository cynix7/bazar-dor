"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const signInPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string, };
        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
        });
        if (data) {
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const githubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };
    return (
        <div className='m-8'>
            <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                <h2 className='text-xl font-bold'>সাইন ইন</h2>
                <p className='text-xs'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">

                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="you@example.com" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <button type='submit' className="btn bg-green-600 mt-4 text-white">সাইন ইন</button>
                    <p className='text-center'>অথবা</p>
                    <div className='flex gap-2 justify-center'>
                        <button onClick={googleSignIn} className='btn btn-xs'>Google দিয়ে চালিয়ে যান</button>
                        <button onClick={githubSignIn} className='btn btn-xs'>GitHub দিয়ে চালিয়ে যান</button>
                    </div>
                    <p className='text-center m-2'>অ্যাকাউন্ট নেই? <Link href={"/signUp"} className='text-green-600'>সাইন আপ করুন</Link></p>
                </fieldset>
            </form>
            <Link href={"/"}><p className='text-xs font-semibold text-center text-gray-500 mt-6'>← হোম পেজে ফিরে যান</p></Link>
        </div>
    );
};

export default signInPage;