import { cacheLife } from 'next/cache';
import CategoryLinks from './CategoryLinks';
import { Suspense } from 'react';

const NavLink =async() => {
    "use cache";
    cacheLife("hours");
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data= await res.json();
    return (
        <Suspense
            fallback={
                <div className="container mx-auto h-12 bg-base-300" />
            }
        >
            <CategoryLinks data={data} />
        </Suspense>
    );
};

export default NavLink;