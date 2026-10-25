import { cacheLife } from "next/cache";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headline{
    id:string,
    image: string,
    nameBn: string,
    today: number,
    unit: string,
    change:{
        dir:string,
        pct:number,
    }
}

const Marquee = async() => {
    "use cache";
    cacheLife("hours");
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    return (
        <div className="bg-base-200 p-1.5">
           <MarqueeText direction="right" duration={10}>
             {
                data.map((h:Headline)=>(
                    h.change.dir==="up"?<span key={h.id} className="mx-4">{h.image} {h.nameBn} {h.today} টাকা/{h.unit} <span className="text-red-600">▲{h.change.pct}%</span></span>:h.change.dir==="down"?<span key={h.id} className="mx-4">{h.image} {h.nameBn} {h.today} টাকা/{h.unit} <span className="text-green-600">▼{Math.abs(h.change.pct)}%</span></span>:<span key={h.id} className="mx-4">{h.image} {h.nameBn} {h.today} টাকা/{h.unit} — ০.০%</span>
                ))
            }
           </MarqueeText>
        </div>
    );
};

export default Marquee;