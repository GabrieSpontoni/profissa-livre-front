"use client";
import React from "react";
import Lottie from "../../Lottie/Lottie";

interface ButtonBudgetProps {}

const ButtonBudget: React.FC<ButtonBudgetProps> = ({}) => {
  return (
    <button
      className="btn btn-outline w-full"
      onClick={() => {
        console.log("whatsapp");
      }}
    >
      Pedir orçamento grátis
      <Lottie animationData={require("@/public/lotties/whatsapp.json")} />
    </button>
  );
};

export default ButtonBudget;
