import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const CarouselHighlights = dynamic(
  () => import("../_components/CarouselHighlights/CarouselHighlights"),
  {
    ssr: false,
  }
);

export default function Home() {
  const t = useTranslations("navbar");

  const data = [
    {
      id: 1,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 2,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 3,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 4,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 5,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 6,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 7,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
    {
      id: 8,
      name: "Gabriel Spontoni",
      rating: 4.9,
      reviews: 1000,
      location: "Campo Grande, MS",
      startPrice: 1000,
      imageUrl:
        "https://cdn.amigoconstrutor.com.br/wp-content/uploads/2021/03/137715-refacao-maos-a-obra-6-ferramentas-para-pedreiro-essenciais-em-uma-construcao.jpg",
    },
  ];
  return (
    <div>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://www.maridodealugueljoinville.com.br/wp-content/uploads/2015/07/banner4.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content">
          <div>
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              {t("main")} - Encontre tudo o que precisa de serviço para sua casa
            </h1>
            <p className="mb-5">Mais de 75.000 fornecedores para escolher!</p>
          </div>
        </div>
      </div>
      <div className="hero place-content-start max-w-screen-xl mx-auto">
        <div className="hero-content text-start flex-initial">
          <div>
            <h1 className="text-xl font-bold lg:text-2xl">
              Profissas destacados
            </h1>
            <p className="py-1">Contrate os melhores fornecedores</p>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-xl py-7 mx-auto">
        <CarouselHighlights data={data} />
      </div>
    </div>
  );
}
