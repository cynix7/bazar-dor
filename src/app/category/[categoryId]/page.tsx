import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';
interface Products{
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


const page = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`);
    const products = await res.json();
    const category = products[0];
    if(!category){
        notFound();
    }
    return (
        <div className='container mx-auto my-4'>
            <div className='flex items-center bg-base-100 rounded-xl p-2.5'>
                <h2 className='text-xl'>{category.image}</h2>
                <div>
                    <h2 className='font-bold'>{category.categoryNameBn}</h2>
                    <p className='text-xs'>{products.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <div className='bg-base-100 my-6'>
                <div className='flex justify-end items-center text-xs'>
                    <p>সাজান</p>
                    <select defaultValue="Pick a color" className="border border-base-300 m-3 p-1 rounded-lg">
                        <option disabled={true}>Pick a color</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
            </div>
            <h2 className='mb-2'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</h2>
           <div className='grid grid-cols-3 gap-4'>
             {
                products.map((p:Products)=>(<ProductCard key={p.id} product={p}></ProductCard>))
            }
           </div>
        </div>
    );
};

export default page;