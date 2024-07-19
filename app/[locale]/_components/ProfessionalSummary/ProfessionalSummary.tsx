import { Review } from "@/types/sectionServicesTypes";
import React from "react";

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
    <div>
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
    </div>
  );
};

export default ProfessionalSummary;
