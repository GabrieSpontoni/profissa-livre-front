import { useTranslations } from "next-intl";
import Image from "next/image";
import Lottie from "../../_components/Lottie/Lottie";

export default function Professional() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <Image
                alt=""
                width={200}
                height={280}
                quality={100}
                src="/images/gabriel-spontoni.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Gabriel Spontoni</h1>
              <p className="py-6">
                Como marido de aluguel autônomo nos últimos 10 anos, adquiri uma
                ampla gama de habilidades práticas que me permitem lidar com uma
                variedade de tarefas de manutenção residencial. Desde reparos
                elétricos e hidráulicos até montagem de móveis e pintura, estou
                equipado para lidar com qualquer desafio que surgir.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen text-base-content">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <div className="w-48 h-48">
                <Lottie
                  animationData={require("../../../../public/lotties/money.json")}
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">
                Orçamento que cabe no bolso
              </h1>
              <p className="py-6">
                Seu marido de aluguel confiável e acessível está aqui para
                resolver seus problemas domésticos. Reparos de qualidade a
                preços justos. Deixe-me cuidar dos detalhes, para que você possa
                relaxar e desfrutar de uma casa em perfeitas condições!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <div className="w-48 h-48">
                <Lottie
                  animationData={require("../../../../public/lotties/enginner.json")}
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">
                Ideias Inovadoras e Modernas
              </h1>
              <p className="py-6">
                Descubra soluções inteligentes para os desafios domésticos de
                hoje! Com um toque inovador e moderno, trago ideias criativas
                para transformar sua casa. De reparos técnicos a projetos de
                design, estou aqui para tornar sua visão uma realidade.
                Experimente a diferença de uma abordagem fresca e inspiradora!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
