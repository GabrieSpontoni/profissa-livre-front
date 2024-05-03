import Lottie from "@/app/[locale]/_components/Lottie/Lottie";

export default function Section({
  title,
  description,
  animationData,
}: {
  title: string;
  description: string;
  animationData: unknown;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-base-content">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <div className="w-48 h-48">
              <Lottie animationData={animationData} />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
