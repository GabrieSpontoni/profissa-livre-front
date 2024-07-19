import React from "react";
import Carousel from "../Carousel/Carousel";
import DualColumnLayout from "../DualColumnLayout/DualColumnLayout";
import ProfessionalSummary from "../ProfessionalSummary/ProfessionalSummary";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { ProfissaData } from "@/types/sectionServicesTypes";

interface SectionServicesProps {
  data?: ProfissaData;
}

const SectionServices: React.FC<SectionServicesProps> = ({ data }) => {
  return (
    <DualColumnLayout
      leftContent={
        <>
          <Carousel data={data?.servicesOffered} />
          <ServiceDetails
            name={data?.name}
            rating={data?.rating}
            reviews={data?.reviews}
            bio={data?.bio}
            servicesOffered={data?.servicesOffered}
            location={data?.location}
            contact={data?.contact}
            availability={data?.availability}
            projects={data?.projects}
          />
        </>
      }
      rightContent={
        <ProfessionalSummary
          name={data?.name}
          rating={data?.rating}
          reviews={data?.reviews}
        />
      }
    />
  );
};

export default SectionServices;
