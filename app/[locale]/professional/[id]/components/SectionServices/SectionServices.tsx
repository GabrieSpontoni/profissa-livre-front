import Carousel from "@/app/[locale]/_components/Carousel/Carousel";

export default function SectionServices() {
  const data = [
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/image1.jpg",
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
      title: "GIVE IT A SHOOT",
      tagline: "IF YOU LIKE IT",
      image: "/image2.jpg",
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
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Carousel data={data} />
    </div>
  );
}
