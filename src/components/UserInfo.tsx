"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const UserInfo = () => {
    const {data:session}=authClient.useSession();
    const user=session?.user;

    const handleSignOut=async()=>{
        await authClient.signOut();
    }
    
    return (
        <div>
            {
                user?<div>
                    <h2>{user.name}</h2>
                    <button onClick={handleSignOut} className='btn btn-error btn-xs'>Sign Out</button>
                </div>:<div className='flex gap-4'>
                <Link href={"/signIn"}><button className='btn'>সাইন ইন</button></Link>
                <Link href={"/signUp"}><button className='btn btn-success'>সাইন আপ</button></Link>
            </div>
            }
        </div>
    );
};

export default UserInfo;