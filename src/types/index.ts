export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'room' | 'property' | 'service';
}

export interface PageConfig {
  id: string;
  name: string;
  enabled: boolean;
  icon: string;
}

export interface HotelConfig {
  name: string;
  primaryColor: string;
  style: string;
  pages: PageConfig[];
  amenities: string[];
}