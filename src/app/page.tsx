import AllProduct from "@/components/AllProduct";
import Banner from "@/components/Banner";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";

export default function Home() {
  return (
    <div>
<Banner></Banner>
<PriceUp></PriceUp>
<PriceDown></PriceDown>
<AllProduct></AllProduct>
    </div>
  );
}
