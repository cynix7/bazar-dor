import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headline{
    id:string,
    image: string,
    nameBn: string,
    today: number,
    unit: string,
    change:{
        pct:number,
    }
}

const Marquee = async() => {
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    return (
        <div>
           <MarqueeText direction="right" duration={10}>
             {
                data.map((h:Headline)=>(
                    <span key={h.id} className="mx-4">{`${h.image} ${h.nameBn} ${h.today} টাকা/${h.unit} ▲/▼${h.change.pct}%`}</span>
                ))
            }
           </MarqueeText>
        </div>
    );
};

export default Marquee;