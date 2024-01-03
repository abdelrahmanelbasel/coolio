import { Background } from "@/app/components/Background";
import {Noto_Sans} from 'next/font/google'
import { twMerge } from "tailwind-merge";

const NotoFont = Noto_Sans({
  weight: "variable",
  style: "normal",
  subsets: ['latin'],
  display: "swap",
})

const notoClassName = NotoFont.className


export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen overflow-hidden">
      <Background />
      <h1 className={twMerge("text-8xl font-extrabold text-blue-400", notoClassName)}>Thank You Ya Dalia</h1>
      <h2>Get Better Soon!</h2>
    </main>
  );
}
