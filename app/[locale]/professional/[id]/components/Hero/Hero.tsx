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
  );
}
