'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface Catagory{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const CategoryLinks = ({data}:{data:Catagory[]}) => {
    const pathname = usePathname();
    return (
        <div className='grid grid-cols-4 sm:flex gap-5 container mx-auto my-2 sticky top-21 z-10 bg-base-300'>
           {
            data.map((d: Catagory)=>{
                const href = `/category/${d.slug}`;
        const isActive = pathname === href;
        return(
            <Link key={d.id} href={`/category/${d.slug}`} className={`p-1.5 rounded-lg text-xs font-bold ${isActive?"bg-green-600 text-white":"text-base-content hover:bg-gray-300"}`}> {d.icon}{d.nameBn}</Link>
        )
            })
           }
        </div>
    );
};

export default CategoryLinks;