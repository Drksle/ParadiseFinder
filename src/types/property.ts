export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address?: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  property_type: string;
  images: string[];
  amenities: string[];
  rating?: number;
  available: boolean;
  available_from?: string;
  created_at: string;
  updated_at: string;
  agent_id: string;
}

export interface PropertyCard {
  id: string | number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  rating: number;
  type?: string;
  description?: string;
}

export interface PropertyAgent {
  name: string;
  phone: string;
  email: string;
  image: string;
}

export interface PropertyDetail extends PropertyCard {
  images: string[];
  amenities: string[];
  agent: PropertyAgent;
  available: boolean;
  availableFrom: string;
}
