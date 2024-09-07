import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="bg-blue-100" >
        <div  className="flex flex-col h-[100vh]">

          <div className="bg-slate-500">
          <ul className="flex justify-left gap-1 text-white">
            <li className="p-2">Home</li>
            <li className="p-2 px-4">Blog</li>
            <li className="p-2 px-4">Post</li>
            <li className="p-2">Contact Us</li>
          </ul>
          </div>

          <div className="flex-1 bg-purple-400">
            <div className="flex h-[80vh] justify-center">

              <div className="bg-yellow-400 w-[250px]  border-2">
                Side Navigation
              </div>

              <div className=" flex bg-slate-300 flex-1  border-2 justify-center items-center ">
                {children}
              </div>
            </div>
           
        </div>

        </div>

        
        </div>

      </body>
    </html>
  );
}