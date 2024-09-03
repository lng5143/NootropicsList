import {JetBrains_Mono} from "next/font/google";
import './globals.css'
import Footer from "@/components/main/footer";

const jetbrainsMono = JetBrains_Mono({subsets: ["latin"]})

export const metadata = {
  title: "NootropicsList",
  description: "Curated nootropics vendors to elevate your cognitive performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
      <body className={jetbrainsMono.className + " "}>
        <div id="modal-root"></div>
            {children}
      </body>
    </html>
  );
}
