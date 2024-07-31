import Lottie from "@/app/[locale]/_components/Lottie/Lottie";

export default function Section({
  title,
  description,
  animationData,
  reverse,
}: {
  title: string;
  description: string;
  animationData: unknown;
  reverse?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center pt-8 text-base-content">
      <div className="hero">
        <div
          className={`hero-content p-0 flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div>
            <div className="w-48 h-48">
              <Lottie animationData={animationData} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center md:text-left">
              {title}
            </h1>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
