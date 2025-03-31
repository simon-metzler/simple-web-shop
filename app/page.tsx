import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import InfoText from "@/components/Home/InfoText";
import ProductList from "@/components/Home/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <InfoText />
      <ProductList />
      <Footer />
    </div>
  );
}
