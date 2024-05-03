import Image from "next/image";

export default function Hero() {
  const services = [
    {
      id: 1,
      name: "Elétrica",
    },
    {
      id: 2,
      name: "Hidráulica",
    },
    {
      id: 3,
      name: "Pintura",
    },
    {
      id: 4,
      name: "Serviços de pedreiro",
    },
    {
      id: 5,
      name: "Instalação de máquina de lavar louça",
    },
  ];
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
            <h1 className="text-3xl font-bold text-center md:text-left">
              Pedro Henrique
            </h1>
            <p className="py-6">
              Como prestador de serviços autônomo nos últimos 10 anos, adquiri
              uma ampla gama de habilidades práticas que me permitem lidar com
              uma variedade de tarefas de manutenção residencial. Desde reparos
              elétricos e hidráulicos até montagem de móveis e pintura, estou
              equipado para lidar com qualquer desafio que surgir.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {services.map((service) => (
                <div key={service.id} className="badge badge-primary gap-2">
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
