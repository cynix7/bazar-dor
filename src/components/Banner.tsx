import Image from 'next/image';
import React from 'react';

const Banner = () => {
    const date=new Date().toLocaleDateString('bn-BD', {
  dateStyle:"full"
});
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div>
                <p className='text-green-600'>{date}</p>
                <h2 className='text-4xl font-bold'>আজকের বাজারের দাম এক নজরে</h2>
                <p className='my-4'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button className='btn btn-success text-white'>সব পণ্য দেখুন</button>
            </div>
            <Image src={'/bazar-hero.png'} alt='Hero' height={400} width={400}></Image>
        </div>
    );
};

export default Banner;