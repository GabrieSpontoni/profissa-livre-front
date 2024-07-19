import Carousel from "@/app/[locale]/_components/Carousel/Carousel";

interface Review {
  reviewer: string;
  comment: string;
  rating: number;
}

interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

interface ServiceOffered {
  id: number;
  serviceName: string;
  description: string;
  imageUrl: string;
}

interface Project {
  projectName: string;
  description: string;
  year: number;
  imageUrl: string;
}

interface Contact {
  phone: string;
  email: string;
}

interface ProfissaData {
  id: string;
  name: string;
  rating: number;
  reviews: Review[];
  location: Location;
  servicesOffered: ServiceOffered[];
  contact: Contact;
  availability: string[];
  yearsOfExperience: number;
  certifications: string[];
  projects: Project[];
  bio: string;
}

interface SectionServicesProps {
  data?: ProfissaData;
}

export default function SectionServices({ data }: SectionServicesProps) {
  return (
    <div>
      <div className="flex flex-col mx-auto px-4 max-w-7xl xl:flex-row">
        <Carousel data={data?.servicesOffered} />
        <div className="hero items-start">
          <div className="hero-content justify-start w-full px-0 xl:px-4">
            <div className="flex flex-col gap-4  justify-between w-full">
              <h1 className="text-3xl font-bold">{data?.name}</h1>
              <div className="flex items-center gap-2">
                <div className="rating rating-sm">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-6"
                      disabled
                      className={`mask mask-star-2 ${
                        index < Math.round(data?.rating || 0)
                          ? "bg-orange-400"
                          : ""
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <h1 className="text-sm lg:text-base font-semibold text-center items-center">
                    {data?.rating} Fantástico .
                  </h1>

                  <a className="link link-primary text-sm lg:text-base font-medium text-center">
                    {data?.reviews.length} opiniões
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <div className="hero">
          <div className="hero-content justify-start items-center px-4 w-full">
            <div>
              <div className="pb-4">
                <h1 className="text-xl font-bold md:text-left">
                  Serviços oferecidos
                </h1>
                <ul>
                  {data?.servicesOffered.map((service) => (
                    <li key={service.id}>
                      <h2 className="font-semibold">{service.serviceName}</h2>
                      <p>{service.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h1 className="text-xl font-bold md:text-left">
                  Área de atuação
                </h1>
                <p>
                  {data?.location.address}, {data?.location.city},{" "}
                  {data?.location.state}, {data?.location.country},{" "}
                  {data?.location.zipCode}
                </p>
              </div>
              <div className="pb-4">
                <h1 className="text-xl font-bold md:text-left">Contato</h1>
                <p>Telefone: {data?.contact.phone}</p>
                <p>Email: {data?.contact.email}</p>
              </div>
              <div className="pb-4">
                <h1 className="text-xl font-bold md:text-left">
                  Disponibilidade
                </h1>
                <ul>
                  {data?.availability.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h1 className="text-xl font-bold md:text-left">Projetos</h1>
                <ul>
                  {data?.projects.map((project) => (
                    <li key={project.projectName}>
                      <h2 className="font-semibold">{project.projectName}</h2>
                      <p>
                        {project.description} ({project.year})
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h1 className="text-xl font-bold md:text-left">Sobre</h1>
                <p>{data?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
