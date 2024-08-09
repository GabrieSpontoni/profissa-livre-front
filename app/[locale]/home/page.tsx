import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("navbar");
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
              Contrate os melhores fornecedores
            </h1>
            <p className="py-1">
              Comece a construir ou reformar sua casa com a gente. Simples e
              grátis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
