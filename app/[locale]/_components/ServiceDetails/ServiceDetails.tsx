import React from "react";
import {
  Contact,
  Project,
  ServiceOffered,
  Location,
} from "@/types/sectionServicesTypes";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface ServiceDetailsProps {
  bio?: string;
  servicesDescription?: string;
  servicesOffered?: ServiceOffered[];
  location?: Location;
  contact?: Contact;
  availability?: string[];
  projects?: Project[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  bio,
  servicesDescription,
  servicesOffered,
  location,
  contact,
  availability,
}) => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Sobre</h1>
        <p>{bio}</p>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Serviços oferecidos</h1>
        <p>{servicesDescription}</p>
        <ul className="flex flex-col gap-4 mt-4">
          {servicesOffered?.map((service) => (
            <li className="flex items-center gap-2" key={service.id}>
              <RiCheckboxBlankCircleFill size={7} color="orange" />
              <h2>{service.serviceName}</h2>
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
      <div className="my-8">
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
    </div>
  );
};

export default ServiceDetails;
