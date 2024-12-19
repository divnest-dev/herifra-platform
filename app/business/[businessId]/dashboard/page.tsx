import { DashboardContent } from "../components/DashboardContent";

export default function DashboardPage({
  params,
}: {
  params: { businessId: string };
}) {
  return <DashboardContent businessId={params.businessId} />;
}
