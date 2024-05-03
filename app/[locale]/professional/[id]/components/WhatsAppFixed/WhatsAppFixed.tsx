"use client";
import Lottie from "@/app/[locale]/_components/Lottie/Lottie";

export default function WhatsAppFixed() {
  return (
    <Lottie
      className="fixed bottom-4 right-4 cursor-pointer p-0 bg-green-200 rounded-full border-spacing-0"
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send?phone=556781904318&text=Olá Pedro, vim do site PROFISSA LIVRE e gostaria de saber mais sobre seus serviços.",
          "_blank"
        )
      }
      width={60}
      height={60}
      animationData={require("@/public/lotties/whatsapp.json")}
    />
  );
}
