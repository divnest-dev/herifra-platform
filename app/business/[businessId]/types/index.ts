export interface BusinessService {
  name: string;
  icon: string;
  price: string;
}

export interface OpeningHours {
  mon_fri: string;
  sat: string;
  sun: string;
}

export interface BusinessStatistics {
  monthlyVisits: number;
  activeCustomers: number;
  totalBookings: number;
}

export interface BusinessData {
  id: string;
  name: string;
  owner: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  services: BusinessService[];
  openingHours: OpeningHours;
  images: string[];
  statistics: BusinessStatistics;
}
