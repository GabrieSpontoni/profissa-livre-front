import { useTranslations } from "next-intl";
import Image from "next/image";
import Lottie from "../../_components/Lottie/Lottie";

export default function Professional() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <Image
              alt=""
              width={200}
              height={280}
              quality={100}
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />

            <div className="w-48 h-48">
              <Lottie
                animationData={require("../../../../public/lotties/enginner.json")}
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">{t("title")}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
