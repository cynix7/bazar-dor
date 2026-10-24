import CategoryProduct from '@/components/CategoryProduct';
import { notFound } from 'next/navigation';

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
            <CategoryProduct products={products}></CategoryProduct>
        </div>
    );
};

export default page;