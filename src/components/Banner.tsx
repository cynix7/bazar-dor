import Image from 'next/image';
const Banner = () => {
    const date=new Date().toLocaleDateString('bn-BD', {
  dateStyle:"full"
});
    return (
        <div className='grid grid-cols-1 text-center sm:text-start sm:flex justify-between items-center container mx-auto bg-base-100 my-8 px-6 rounded-2xl'>
            <div>
                <p className='inline-block py-1 px-1.5 text-green-600 bg-green-100 rounded-xl my-2'>{date}</p>
                <h2 className='text-4xl font-bold'>আজকের বাজারের দাম এক নজরে</h2>
                <p className='my-4 text-gray-600'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <a href="#product"><button className='btn bg-green-600 hover:bg-green-700 text-white mb-2'>সব পণ্য দেখুন</button></a>
            </div>
            <Image src={'/bazar-hero.png'} alt='Hero' height={350} width={350} className='mx-auto'></Image>
        </div>
    );
};

export default Banner;