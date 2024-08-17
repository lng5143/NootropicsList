import MainData from "@/components/main/main-data";
import Faq from "@/components/main/faq";

export default function Home() {
  return (
      <div className="box-border">
          <header className="p-20 text-center">
              <h1 className="text-5xl">CURATED NOOTROPICS VENDORS</h1>
              <p className="text-xl">Description...</p>
          </header>
          <main className="p-20 flex flex-col items-center">
              <MainData />
              <Faq />
          </main>
      </div>
  );
}
