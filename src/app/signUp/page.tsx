"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
const signUpPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string, repeatedPass: string };
        if (user.repeatedPass.length === 0 || user.password.length===0) {
            toast.error("পাসওয়ার্ড নিশ্চিত করুন!");
            return;
        }
        if (user.password !== user.repeatedPass) {
            toast.error("দুটি পাসওয়ার্ড মিলছে না!");
            return;
        }
        if (!user.name.trim() || !user.email.trim() || !user.password || !user.repeatedPass) {
        toast.error("সব তথ্য পূরণ করুন!");
        return;
    }
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        });
        
        if (data) {
            toast.success("সফলভাবে সাইন আপ হয়েছে!")
            redirect("/");
        }
        if (error) {
            toast.error(error.message as string);
        }
    }
    const googleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };
    const githubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };
    return (
        <div className='m-8'>
            <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                <h2 className='text-xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h2>
                <p className='text-xs'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">
                    <label className="label">নাম</label>
                    <input name='name' type="text" className="input" placeholder="যেমন: রহিম উদ্দিন" required />

                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="you@example.com" required />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input name='repeatedPass' type="password" className="input" placeholder="আবার লিখুন" />

                    <button type="submit" className="btn bg-green-600 mt-4 text-white">অ্যাকাউন্ট তৈরি করুন</button>
                    <p className='text-center'>অথবা</p>
                    <div className='flex gap-2 justify-center'>
                        <button type='button' onClick={googleSignIn} className='btn btn-xs'>Google দিয়ে চালিয়ে যান</button>
                        <button type='button' onClick={githubSignIn} className='btn btn-xs'>GitHub দিয়ে চালিয়ে যান</button>
                    </div>
                    <p className='text-center m-2'>অ্যাকাউন্ট আছে? <Link href={"/signIn"} className='text-green-600'> সাইন ইন করুন</Link></p>
                </fieldset>
            </form>
            <Link href={"/"}><p className='text-xs font-semibold text-center text-gray-500 mt-6'>← হোম পেজে ফিরে যান</p></Link>
        </div>
    );
};

export default signUpPage;