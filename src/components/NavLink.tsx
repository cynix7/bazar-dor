import CategoryLinks from './CategoryLinks';

const NavLink =async() => {
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data= await res.json();
    return (
        <CategoryLinks data={data}></CategoryLinks>
    );
};

export default NavLink;