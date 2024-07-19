import {
  Contact,
  Project,
  Review,
  ServiceOffered,
  Location,
} from "@/types/sectionServicesTypes";
import React from "react";

interface ServiceDetailsProps {
  name?: string;
  rating?: number;
  reviews?: Review[];
  bio?: string;
  servicesOffered?: ServiceOffered[];
  location?: Location;
  contact?: Contact;
  availability?: string[];
  projects?: Project[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  name,
  rating,
  reviews,
  bio,
  servicesOffered,
  location,
  contact,
  availability,
  projects,
}) => {
  return (
    <div>
      <div className="lg:hidden">
        <div className="flex flex-col gap-4 p-4 w-full">
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
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Sobre</h1>
        <p>{bio}</p>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Serviços oferecidos</h1>
        <ul>
          {servicesOffered?.map((service) => (
            <li key={service.id}>
              <h2 className="font-semibold">{service.serviceName}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Área de atuação</h1>
        <p>
          {location?.address}, {location?.city}, {location?.state},{" "}
          {location?.country}, {location?.zipCode}
        </p>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Contato</h1>
        <p>Telefone: {contact?.phone}</p>
        <p>Email: {contact?.email}</p>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Disponibilidade</h1>
        <ul>
          {availability?.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Projetos</h1>
        <ul>
          {projects?.map((project) => (
            <li key={project.projectName}>
              <h2 className="font-semibold">{project.projectName}</h2>
              <p>
                {project.description} ({project.year})
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
