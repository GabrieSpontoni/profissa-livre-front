import Lottie from "@/app/[locale]/_components/Lottie/Lottie";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <Image
              alt=""
              width={200}
              height={280}
              quality={100}
              src="/images/pedro-henrique.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <h1 className="text-3xl font-bold text-center md:text-left">
                Pedro Henrique
              </h1>
              <div className="w-12 h-12">
                <Lottie
                  animationData={require("@/public/lotties/hello.json")}
                />
              </div>
            </div>
            <p className="py-6">
              Como prestador de serviços autônomo nos últimos 10 anos, adquiri
              uma ampla gama de habilidades práticas que me permitem lidar com
              uma variedade de tarefas de manutenção residencial. Desde reparos
              elétricos e hidráulicos até montagem de móveis e pintura, estou
              equipado para lidar com qualquer desafio que surgir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
