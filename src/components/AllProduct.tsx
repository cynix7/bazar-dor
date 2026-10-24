import ProductCard from './ProductCard';
interface Product {
    nameBn: string,
    id: number,
    image: string,
    unit: string,
    today: number,
    change: {
        dir: string,
        pct: number,
    }
}

const AllProduct = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    const product = data.slice(0, 33);
    return (
        <div className='container mx-auto mt-8'>

            <div className='mb-4'>
                <h2 id='product' className='text-xl font-bold'> সব পণ্য</h2>
                <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {
                    product.map((product: Product) => (<ProductCard key={product.id} product={product}></ProductCard>))
                }
            </div>
        </div>
    );
};

export default AllProduct;