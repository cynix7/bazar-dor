import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-100 mt-16'>
            <div className='grid grid-cols-1 text-center sm:flex justify-between container mx-auto py-6'>
            <p className='text-gray-500 text-xs'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
            <p className='text-gray-500 text-xs'>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
        </div>
        </div>
    );
};

export default Footer;