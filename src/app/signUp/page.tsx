"use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
const signUpPage = () => {

    const onSubmit=async(e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const user= Object.fromEntries(formData.entries()) as {name:string, email:string,password:string, };
        const{data,error}= await authClient.signUp.email({
            ...user,
            callbackURL:"/"
        });
        if(data){
            console.log(data);
            redirect("/");
        }
        if(error){
            console.log(error);
        }
    }
    return (
        <div className='m-8'>
            <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                <h2 className='text-xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h2>
                    <p className='text-xs'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">
                    <label className="label">নাম</label>
                    <input name='name' type="text" className="input" placeholder="যেমন: রহিম উদ্দিন" />

                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="you@example.com" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input name='repeated-pass' type="password" className="input" placeholder="আবার লিখুন" />

                    <button type="submit" className="btn bg-green-600 mt-4 text-white">অ্যাকাউন্ট তৈরি করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default signUpPage;