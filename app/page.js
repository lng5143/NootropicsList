import MainData from "@/components/main/main-data";
import Faq from "@/components/main/faq";
import Image from "next/image";
import About from "@/components/main/about";

export default function Home() {
  return (
      <div className="box-border">
          <header className="flex flex-col items-center p-10 md:px-56 md:pt-20 text-center">
              <h1 className="text-5xl mb-2 leading-snug">ELEVATE YOUR MIND WITH TRUSTED NOOTROPICS SOURCES</h1>
              <Image className="mb-5" src="headline-image.png" alt="chemistry" width={50} height={0} layout="intrinsic"/>
              <p className="text-xl">Discover a curated selection of the finest nootropics from the most reliable vendors.</p>
          </header>
          <main className="p-10 md:p-20 flex flex-col items-center gap-20">
              <MainData />
              <hr className="w-full border-slate-300"/>
              <Faq />
              <hr className="w-full border-slate-300"/>
              <About />
          </main>
      </div>
  );
}
