export interface Review {
  reviewer: string;
  comment: string;
  rating: number;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface ServiceOffered {
  id: number;
  serviceName: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  projectName: string;
  description: string;
  year: number;
  imageUrl: string;
}

export interface Contact {
  phone: string;
  email: string;
}

export interface ProfissaData {
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
