import { DashboardContent } from "../components/DashboardContent";

interface PageParams {
  params: {
    businessId: string;
  };
}

export default function DashboardPage({ params }: PageParams) {
  const businessId = params.businessId;
  return <DashboardContent businessId={businessId} />;
}
