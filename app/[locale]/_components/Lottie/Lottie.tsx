"use client";
import { LottieComponentProps } from "lottie-react";
import dynamic from "next/dynamic";
const LottieReact = dynamic(() => import("lottie-react"), { ssr: false });

export default function Lottie(props: LottieComponentProps) {
  return <LottieReact {...props} width="100%" height="100%" />;
}
