import Link from "next/link";
import { notFound } from "next/navigation";

interface Market{
    market:string,
    division: string,
    min:number,
    max:number,
}
const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const { productId } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`);
    const product = await res.json();
if(!product.id){
    notFound();
}
    
    const minPrice = Math.min(
        ...product.markets.map((market : Market) => market.min)
    );
    const maxPrice = Math.max(
        ...product.markets.map((market : Market) => market.max)
    );
    const avgPrice = (minPrice + maxPrice) / 2;
    return (
        <div className='container mx-auto'>
            <div className='flex items-center gap-2.5 my-8'>
                <Link href={"/"}><button className="cursor-pointer p-1.5 rounded-lg hover:bg-gray-300">হোম</button></Link>
                <span className='text-xs font-bold'>˃</span>
                <Link href={`/category/${product.category}`}><button className="cursor-pointer p-1.5 rounded-lg hover:bg-gray-300">{product.categoryNameBn}</button></Link>
                <span className='text-xs font-bold'>˃</span>
                <button>{product.nameBn}</button>
            </div>
            <div className='flex justify-between items-center bg-base-100 rounded-xl p-4'>
                <div className='flex items-center gap-4'>
                    <h2 className='text-2xl bg-base-300 rounded-lg p-2.5'>{product.image}</h2>
                    <div>
                        <h2 className='text-2xl font-bold'>{product.nameBn}</h2>
                        <p className='mb-2 text-gray-500'>প্রতি {product.unit} {product.categoryNameBn}</p>
                        {product.change.dir === "up" ? <p>গতকালের তুলনায় আজ দাম বেড়েছে · {product.today - product.yesterday} টাকা</p> : product.change.dir === "down" ? <p>গতকালের তুলনায় আজ দাম কমেছে  · {product.yesterday - product.today} টাকা</p> : <p>গতকালের তুলনায় আজ দাম একই রয়েছে </p>}
                    </div>
                </div>
                <div className='bg-base-300 p-2.5 text-center rounded-lg'>
                    <h2 className="text-gray-500">আজকের দাম</h2>
                    <p className="text-xl font-bold">{product.today}</p>
                    <p className="text-gray-500">টাকা / {product.unit}</p>
                    {product.change.dir==="up"?<p className="text-red-600">▲ {product.change.pct}%</p>:product.change.dir==="down"?<p className="text-green-600">▼ {Math.abs(product.change.pct)}%</p>:<p>— ০.০%</p>}
                </div>
            </div>
            <div className='bg-base-100 my-6 p-4 rounded-2xl'>
                <h2 className='font-semibold mb-2.5'>দামের সারসংক্ষেপ</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='bg-base-200 border border-base-300 rounded-xl'>
                        <div className='p-2.5'>
                            <p>সর্বনিম্ন দাম</p>
                            <p className='text-green-600'>{minPrice} টাকা</p>
                            <p>সবচেয়ে কম দামের বাজার</p>
                        </div>
                    </div>
                    <div className='bg-base-200 border border-base-300 rounded-xl'>
                        <div className='p-2.5'>
                            <p>সর্বাধিক দাম</p>
                            <p className='text-red-600'>{maxPrice} টাকা</p>
                            <p>সবচেয়ে বেশি দামের বাজার</p>
                        </div>
                    </div>
                    <div className='bg-base-200 border border-base-300 rounded-xl'>
                        <div className='p-2.5'>
                            <p>গড় দাম</p>
                            <p className='text-green-600'>{avgPrice} টাকা</p>
                            <p>প্রতি কেজি-এর হিসাবে</p>
                        </div>
                    </div>
                </div>
                <h2 className='py-4 font-semibold'>বাজারভিত্তিক আজকের দাম</h2>
            <div>
                <div className='grid grid-cols-5 border border-base-300 p-1 text-xs text-gray-500 font-bold'>
                    <h2>বাজার</h2>
                    <h2>বিভাগ</h2>
                    <h2>সর্বনিম্ন</h2>
                    <h2>সর্বাধিক</h2>
                    <h2>গড়</h2>
                </div>
                {product.markets.map((m: Market)=>(<div key={m.market} className='grid grid-cols-5 border border-base-300 p-1 text-xs'>
                    <h2>{m.market}</h2>
                    <h2>{m.division}</h2>
                    <h2>{m.min} টাকা</h2>
                    <h2>{m.max} টাকা</h2>
                    <h2>{(m.min+m.max)/2} টাকা</h2>
                </div>))}
            </div>
            </div>
            
        </div>
    );
};

export default page;