import { PageConfig } from '../types';
import { Home, BedDouble, UtensilsCrossed, Dumbbell, Car, Phone, Image, MapPin } from 'lucide-react';

export const defaultPages: PageConfig[] = [
  { id: 'home', name: 'Home', enabled: true, icon: 'Home' },
  { id: 'rooms', name: 'Rooms & Suites', enabled: true, icon: 'BedDouble' },
  { id: 'dining', name: 'Dining', enabled: true, icon: 'UtensilsCrossed' },
  { id: 'amenities', name: 'Amenities', enabled: true, icon: 'Dumbbell' },
  { id: 'parking', name: 'Parking', enabled: false, icon: 'Car' },
  { id: 'contact', name: 'Contact', enabled: true, icon: 'Phone' },
  { id: 'gallery', name: 'Gallery', enabled: false, icon: 'Image' },
  { id: 'location', name: 'Location', enabled: false, icon: 'MapPin' },
];