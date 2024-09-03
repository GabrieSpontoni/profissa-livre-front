import { Review } from "@/types/sectionServicesTypes";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import ButtonBudget from "./ButtonBudget/ButtonBudget";

interface ProfessionalSummaryProps {
  name?: string;
  rating?: number;
  reviews?: Review[];
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({
  name,
  rating,
  reviews,
}) => {
  return (
    <div className="flex flex-col gap-4 pt-4 lg:px-4 lg:pt-0 w-full">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="flex items-center gap-2">
        <div className="rating rating-sm">
          {Array.from({ length: 5 }).map((_, index) => (
            <input
              key={index}
              type="radio"
              name="rating-6"
              disabled
              className={`mask mask-star-2 ${
                index < Math.round(rating || 0) ? "bg-orange-400" : ""
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-sm lg:text-base font-semibold text-center items-center">
            {rating} Fantástico.
          </h1>
          <a className="link link-primary text-sm lg:text-base font-medium text-center">
            {reviews?.length} opiniões
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FiMapPin />
        <h1 className="text-sm lg:text-base font-semibold text-center items-center">
          São Paulo, SP
        </h1>
      </div>

      <div className="shadow-lg rounded-lg">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            className={`flex items-center gap-2 p-4 ${
              index === 0 ? "border-b" : "border-none"
            }`}
            key={index}
          >
            <GrUserWorker />
            <h1 className="text-sm lg:text-base font-semibold text-center items-center">
              Serviços a partir de R$ 150,00
            </h1>
          </div>
        ))}
      </div>

      <div className="lg:hidden flex items-center gap-2 fixed w-full bottom-0 left-0 p-4 z-10 bg-fixed">
        <ButtonBudget />
      </div>

      <div className="hidden lg:flex">
        <ButtonBudget />
      </div>

      <div className="flex flex-col gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="flex items-center gap-2" key={index}>
            <IoRocketOutline />
            <h1 className="text-sm lg:text-base  text-center items-center">
              Dos melhores de SP
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSummary;
