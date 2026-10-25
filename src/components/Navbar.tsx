import Image from 'next/image';
import UserInfo from './UserInfo';
import Link from 'next/link';
import CurrentDate from './CurrentDate';

const Navbar = () => {
    
    return (
        <div className='sticky top-0 z-40 bg-base-200 p-4'>
            <div className='flex justify-between container mx-auto'>
            <div className='flex items-center gap-4'>
                <Image className='bg-green-700 p-2 w-10 h-10 rounded-xl' src={"/logo-icon.png"} alt='logo' height={40} width={40}></Image>
            <div>
                <Link href={"/"}><h2 className='text-lg md:text-2xl font-bold'>বাজার দর</h2></Link>
                <p className='text-xs sm:text-sm text-gray-600'> <CurrentDate></CurrentDate> </p>
            </div>
            </div>
            <UserInfo></UserInfo>
            
        </div>
        </div>
    );
};

export default Navbar;