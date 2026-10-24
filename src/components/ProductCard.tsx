import Link from 'next/link';
import React from 'react';
interface Product{
    product:{
        nameBn:string,
    id:number,
    image:string,
    unit: string,
    today: number,
    change:{
        dir: string,
        pct: number,
    }
    }
}

const ProductCard = ({product}:Product) => {
    return (
       <Link href={`/product/${product.id}`}>
        <div className='bg-base-200 rounded-lg p-2 hover:border border-green-600'>
            <div className='flex items-center gap-2 m-2'>
                <h1 className='text-2xl bg-base-300 p-2 rounded-lg'>{product.image}</h1>
                <div>
                    <h2>{product.nameBn}</h2>
                    <p>প্রতি {product.unit}</p>
                </div>
            </div>
            <div className='m-2'>
                <h2>আজকের দাম</h2>
                <div className='flex  justify-between'>
                    <p><span className='text-xl font-bold'>{product.today}</span> টাকা</p>
                    {product.change.dir==="up"?<p className='bg-base-300 rounded-4xl py-1 px-2 text-red-600 text-xs'>▲ {product.change.pct}%</p> :product.change.dir==="down" ?<p className='bg-base-300 rounded-4xl py-1 px-2 text-green-600 text-xs'>▼ {Math.abs(product.change.pct)}%</p> : <p className='bg-base-300 rounded-4xl py-1 px-2 text-xs'>— ০.০%</p>}
                </div>
                
            </div>
        </div>
       </Link>
    );
};

export default ProductCard;