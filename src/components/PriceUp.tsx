import ProductCard from './ProductCard';
interface Product{
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

const PriceUp = async() => {
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data= await res.json();
    const priceUp= data.filter((d:Product)=>d.change.dir==="up").sort((a:Product,b:Product)=>b.change.pct-a.change.pct).slice(0,6);
    return (
        <div className='container mx-auto'>
            <div className='flex items-center m-4'>
                <span className='text-red-600'>▲</span>
            <h2 className='text-xl font-bold'> আজ দাম বেড়েছে</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                priceUp.map((product:Product)=>(<ProductCard key={product.id} product={product}></ProductCard>))
            }
        </div>
        </div>
    );
};

export default PriceUp;