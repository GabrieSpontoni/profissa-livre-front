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
          <div className="hero-content justify-start px-4 w-full">
            <div className="flex flex-col gap-4 items-start lg:flex-row lg:items-center">
              <h1 className="text-3xl font-bold text-center md:text-left">
                Pedro Henrique
              </h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  disabled
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  disabled
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  disabled
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  disabled
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  disabled
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
