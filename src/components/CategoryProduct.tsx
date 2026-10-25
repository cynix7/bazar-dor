'use client'

import { useState } from "react";
import ProductCard from "./ProductCard";

interface Products {
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
interface CategoryProduct {
    products: Products[];
}


const CategoryProduct = ({ products }: CategoryProduct) => {

    const [sortBy, setSortBy] = useState("default");
    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'low-high') {
            return a.today - b.today;
        }

        if (sortBy === 'high-low') {
            return b.today - a.today;
        }
        return 0;
    });

    return (
        <div>
            <div className='bg-base-100 my-6'>
                <div className='flex justify-end items-center text-xs'>
                    <p>সাজান</p>
                    <select value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-base-300 m-3 p-1 rounded-lg">
                        <option value="default" disabled={true}>ডিফল্ট</option>
                        <option value="low-high">দাম : কম থেকে বেশি </option>
                        <option value="high-low">দাম : বেশি থেকে কম </option>
                    </select>
                </div>
            </div>
            <h2 className='mb-2'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    sortedProducts.map((p: Products) => (<ProductCard key={p.id} product={p}></ProductCard>))
                }
            </div>
        </div>
    );
};

export default CategoryProduct;