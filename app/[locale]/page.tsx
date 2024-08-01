export default function Home() {
  return (
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
          <h1 className="mb-5 text-5xl font-bold">
            Encontre tudo o que precisa de serviço para sua resideência
          </h1>
          <p className="mb-5">Mais de 75.000 fornecedores para escolher!</p>
        </div>
      </div>
    </div>
  );
}
