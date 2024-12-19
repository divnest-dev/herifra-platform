import { DashboardContent } from "../components/DashboardContent";

export type paramsType = Promise<{ businessId: string }>;

export default async function DashboardPage(props: { params: paramsType }) {
  const { businessId } = await props.params;

  return <DashboardContent businessId={businessId} />;
}
