import Link from 'next/link';
import React from 'react';

interface Catagory{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLink =async() => {
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data= await res.json();
    console.log(data);
    return (
        <div className='flex gap-5 container mx-auto my-4'>
           {
            data.map((d: Catagory)=>(<Link key={d.id} href={d.slug}> {d.icon}{d.nameBn}</Link>))
           }
        </div>
    );
};

export default NavLink;