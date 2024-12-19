export interface BusinessData {
  id: string;
  name: string;
  owner: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  services: Array<{
    name: string;
    icon: string;
    price: string;
  }>;
  images: string[];
  openingHours: {
    mon_fri: string;
    sat: string;
    sun: string;
  };
  statistics: {
    monthlyVisits: number;
    activeCustomers: number;
    totalBookings: number;
  };
}

export const getMockBusinessData = (id: string): BusinessData => ({
  id,
  name: "Norris Gård",
  owner: "Chuck Norris",
  email: "business@mail.com",
  phone: "+47 123 45 678",
  location: "6150 Ørsta",
  description:
    "En familiedrevet gård med fokus på økologisk fruktproduksjon og overnatting.",
  services: [
    { name: "Frukt", icon: "🍎", price: "30kr/kg" },
    { name: "Overnatting", icon: "🏠", price: "800kr/natt" },
  ],
  images: ["/placeholder.jpg", "/placeholder2.jpg", "/placeholder3.jpg"],
  openingHours: {
    mon_fri: "09:00 - 17:00",
    sat: "10:00 - 16:00",
    sun: "Stengt",
  },
  statistics: {
    monthlyVisits: 245,
    activeCustomers: 12,
    totalBookings: 38,
  },
});
