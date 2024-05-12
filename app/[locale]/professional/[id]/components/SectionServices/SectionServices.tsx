import Carousel from "@/app/[locale]/_components/Carousel/Carousel";

export default function SectionServices() {
  const data = [
    {
      id: 1,
      title: "Pintura",
      tagline: "Serviço de pintura de alta qualidade",
      image: "/images/pintura.webp",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 2,
      title: "Reforma",
      tagline: "Reforma de alta qualidade e durabilidade",
      image: "/images/reforma.png",
      buttons: [
        {
          id: 1,
          text: "Julia M Cameron",
          link: "https://www.pexels.com/@julia-m-cameron/",
          type: "btn-dark btn-circle",
        },
      ],
    },
  ];


  return (
    <div className="min-h-screen">
      <Carousel data={data} />

      <div className="flex flex-col items-center">
        <div className="hero">
          <div className="hero-content justify-start items-center px-4 w-full">
            <div className="flex flex-col gap-4 items-start lg:flex-row lg:items-center justify-between w-full">
              <h1 className="text-3xl font-bold text-center md:text-left">
                Pedro Henrique
              </h1>
              <div className="flex gap-2">
                <div className="rating rating-sm lg:rating-md">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-6"
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <h1 className="text-sm lg:text-xl font-semibold text-center items-center">
                    5.0 Fantástico
                  </h1>

                  <a className="link link-primary text-sm lg:text-lg font-medium  text-center">
                    100+ avaliações
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
