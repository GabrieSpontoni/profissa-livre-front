import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import WhatsAppFixed from "./components/WhatsAppFixed/WhatsAppFixed";

export default function Professional() {
  return (
    <>
      <WhatsAppFixed />
      <Hero />
      <Section
        title="Orçamento que cabe no bolso"
        description="Seu prestador de serviços confiável e acessível está aqui para
      resolver seus problemas domésticos. Reparos de qualidade a preços
      justos. Deixe-me cuidar dos detalhes, para que você possa relaxar
      e desfrutar de uma casa em perfeitas condições!"
        animationData={require("@/public/lotties/money.json")}
      />
      <Section
        title="Ideias inovadoras e modernas"
        description="Descubra soluções inteligentes para os desafios domésticos de
        hoje! Com um toque inovador e moderno, trago ideias criativas
        para transformar sua casa. De reparos técnicos a projetos de
        design, estou aqui para tornar sua visão uma realidade.
        Experimente a diferença de uma abordagem fresca e inspiradora!"
        animationData={require("@/public/lotties/enginner.json")}
        reverse
      />
    </>
  );
}
