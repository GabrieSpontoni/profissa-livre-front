import Section from "../../_components/SectionMarketing/SectionMarketing";
import SectionServices from "../../_components/SectionServices/SectionServices";

export default async function Professional() {
  const getProfessional = async () => {
    const response = await fetch("http://localhost:3001/profissa/12555", {
      next: { revalidate: 0 },
    });
    const data = await response.json();
    return data;
  };

  const professional = await getProfessional();

  return (
    <>
      <SectionServices data={professional} />
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
      <Section
        title="Qualidade e durabilidade"
        description="Com um compromisso inabalável com a qualidade e a durabilidade,
        ofereço serviços excepcionais que você pode confiar. De reparos
        simples a projetos complexos, cada trabalho é concluído com
        atenção aos detalhes e um alto padrão de excelência. Sua satisfação
        é minha prioridade, e estou comprometido em superar suas expectativas
        em cada etapa do processo."
        animationData={require("@/public/lotties/hand-shake.json")}
      />
    </>
  );
}
