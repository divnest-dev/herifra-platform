// app/business/[businessId]/page.tsx
import { BusinessProfile } from "./components/BusinessProfile";

// Mock data - replace with Supabase data later
const businessData = {
  id: "123",
  name: "Norris Gård",
  owner: "Chuck Norris",
  email: "business@mail.com",
  phone: "+47 123 45 678",
  location: "6150 Ørsta",
  description: "Vi tilbyr ferske frukt og overnatting i vakre omgivelser.",
  services: [
    { name: "Frukt", icon: "🍎", price: "kr 45/kg" },
    { name: "Overnatting", icon: "🏠", price: "kr 990/natt" },
  ],
  openingHours: {
    mon_fri: "09:00 - 17:00",
    sat: "10:00 - 15:00",
    sun: "Stengt",
  },
  images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
  statistics: {
    monthlyVisits: 245,
    activeCustomers: 12,
    totalBookings: 38,
  },
};

export default function BusinessPage() {
  return <BusinessProfile data={businessData} />;
}
