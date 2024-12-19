// app/business/[businessId]/dashboard/page.tsx

import { DashboardContent } from "../components/DashboardContent";

interface PageProps {
  params: {
    businessId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function DashboardPage({ params }: PageProps) {
  // Here you can add any async data fetching if needed
  // const data = await fetchBusinessData(params.businessId);

  return <DashboardContent businessId={params.businessId} />;
}
