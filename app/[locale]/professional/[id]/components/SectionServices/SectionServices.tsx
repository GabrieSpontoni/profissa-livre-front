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
    <div className="flex flex-col items-center justify-between py-20">
      <Carousel data={data} />
    </div>
  );
}
