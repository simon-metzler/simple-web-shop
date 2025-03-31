import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-[url(/hero.jpg)] bg-top">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center justify-end w-full">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">2024 KTM 390 DUKE</h1>
          <p className="mb-5">
            Erlebe pure Leistung, atemberaubendes Design und unvergleichliche
            Offroad- und Straßenabenteuer. Egal ob Motocross, Enduro oder Street
            KTM steht für Innovation, Leidenschaft und Adrenalin pur. Steig auf
            und werde Teil der KTM-Community!
          </p>
          <Link href="#product-list" className="btn btn-success">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
