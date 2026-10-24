'use client'
import Image from 'next/image';
import UserInfo from './UserInfo';

const Navbar = () => {
    const date=new Date().toLocaleDateString('bn-BD', {
  dateStyle:"full"
});
    return (
        <div className='flex justify-between container mx-auto'>
            <div className='flex gap-4'>
                <Image className='bg-green-600' src={"/logo-icon.png"} alt='logo' height={40} width={40}></Image>
            <div>
                <h2>বাজার দর</h2>
                <p>{date}</p>
            </div>
            </div>
            <UserInfo></UserInfo>
            
        </div>
    );
};

export default Navbar;