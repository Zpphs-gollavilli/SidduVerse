import { montserrat, poppins } from "@/constant/font";
import "./globals.css";
import Navbar from "../components/Navbar";
import Script from "next/script";

export const metadata = {
  title: "Siddu's 3D World",
  description: "G Siddharth 3D Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}
    >
      <body>
        <Navbar />
        {children}

        {/* ✅ Tawk.to Live Chat Script */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68a1a6d64ebc491927e0952b/1j2rn7e9e';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
