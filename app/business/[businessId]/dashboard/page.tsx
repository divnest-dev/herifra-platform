import { DashboardContent } from "../components/DashboardContent";

export default function DashboardPage({ params }: any) {
  const businessId = params.businessId;

  return <DashboardContent businessId={businessId} />;
}
