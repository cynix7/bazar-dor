"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import toast from 'react-hot-toast';

const UserInfo = () => {
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

    return (
        <div>
            {
                user ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">{user.name} ▾</div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
                        <h2 className='text-xs font-bold'>{user.name}</h2>
                        <p className='text-xs text-gray-500'>{user.email}</p>
                        <li><Link href={"/profile"}>👤 আমার প্রোফাইল</Link></li>
                        <li><button onClick={handleSignOut} className='text-red-600'>↩ সাইন আউট</button></li>
                    </ul>
                </div> : <div className='flex gap-4'>
                    <Link href={"/signIn"}><button className='btn'>সাইন ইন</button></Link>
                    <Link href={"/signUp"}><button className='btn btn-success'>সাইন আপ</button></Link>
                </div>
            }
        </div>
    );
};

export default UserInfo;