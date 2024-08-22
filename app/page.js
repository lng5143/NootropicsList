import MainData from "@/components/main/main-data";
import Faq from "@/components/main/faq";

export default function Home() {
  return (
      <div className="box-border">
          <header className="p-10 md:px-56 md:pt-20 text-center">
              <h1 className="text-5xl mb-10 leading-snug">ELEVATE YOUR MIND WITH TRUSTED NOOTROPICS SOURCES</h1>
              <p className="text-xl">Discover a curated selection of the finest nootropics from the most reliable vendors.</p>
          </header>
          <main className="p-10 md:p-20 flex flex-col items-center">
              <MainData />
              <Faq />
          </main>
      </div>
  );
}
