"use client";
import dynamic from "next/dynamic";
const LottieReact = dynamic(() => import("lottie-react"), { ssr: false });

export default function Lottie({ animationData }: { animationData: unknown }) {
  if (typeof navigator === "undefined") {
    return null;
  }
  return (
    <LottieReact animationData={animationData} width="100%" height="100%" />
  );
}
