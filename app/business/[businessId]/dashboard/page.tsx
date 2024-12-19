// import { getMockBusinessData } from "../utils/mockData";
import { DashboardContent } from "../components/DashboardContent";
// import type { BusinessData } from "../utils/mockData";

interface PageProps {
  params: {
    businessId: string;
  };
}

export default function DashboardPage({ params }: PageProps) {
  // Here you can add any async data fetching if needed
  // const data = await fetchBusinessData(params.businessId);
  const businessId = params.businessId;

  return <DashboardContent businessId={businessId} />;
}
