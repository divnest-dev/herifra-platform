// app/business/[businessId]/components/DashboardContent.tsx
"use client";

import { useState } from "react";
import { Box, Card, Flex, Text, Button, Avatar, Grid } from "@radix-ui/themes";
import { BusinessDetailsForm } from "./BusinessDetailsForm";
import { useRouter } from "next/navigation";

interface DashboardContentProps {
  businessId: string;
}

export function DashboardContent({ businessId }: DashboardContentProps) {
  const router = useRouter();
  const [showSettings, setShowSettings] = useState(false);

  const business = {
    name: "Norris Gård",
    owner: "Chuck Norris",
    email: "business@mail.com",
    location: "6150 Ørsta",
    services: ["Frukt", "Overnatting"],
    image: "/placeholder.jpg",
    statistics: {
      monthlyVisits: 245,
      activeCustomers: 12,
      totalBookings: 38,
    },
  };

  const handleCustomerForm = () => {
    setShowSettings(true);
  };

  const handleLogout = () => {
    router.push("/login");
  };

  if (showSettings) {
    return (
      <Box className="w-full">
        <Flex justify="between" align="center" mb="6">
          <Text size="8" weight="bold">
            Bedriftsinnstillinger
          </Text>
          <Button variant="soft" onClick={() => setShowSettings(false)}>
            Tilbake til dashboard
          </Button>
        </Flex>
        <BusinessDetailsForm />
      </Box>
    );
  }

  return (
    <Box className="w-full">
      <Flex justify="between" align="center" mb="6">
        <Text size="8" weight="bold">
          Bedriftsoversikt - {businessId}
        </Text>
        <Flex gap="3">
          <Button variant="solid" color="grass" onClick={handleCustomerForm}>
            Legg inn kundeforhold
          </Button>
          <Button variant="solid" color="gray" onClick={handleLogout}>
            Logg ut
          </Button>
        </Flex>
      </Flex>

      <Grid columns="3" gap="4" mb="6">
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" color="gray">
              Månedlige besøk
            </Text>
            <Text size="6" weight="bold">
              {business.statistics.monthlyVisits}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" color="gray">
              Aktive kunder
            </Text>
            <Text size="6" weight="bold">
              {business.statistics.activeCustomers}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" color="gray">
              Totale bestillinger
            </Text>
            <Text size="6" weight="bold">
              {business.statistics.totalBookings}
            </Text>
          </Flex>
        </Card>
      </Grid>

      <Card size="3">
        <Flex gap="4">
          <Avatar size="6" src={business.image} fallback={business.name[0]} />
          <Box>
            <Text size="6" weight="bold" mb="2">
              Bedriftsdetaljer
            </Text>
            <Flex direction="column">
              <Text size="4">{business.name}</Text>
              <Text size="3" color="gray">
                {business.email}
              </Text>
              <Text size="3" color="gray">
                {business.location}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Box mt="6">
          <Text size="5" mb="4">
            Registrerte tjenester
          </Text>
          <Flex gap="4">
            {business.services.map((service) => (
              <Text key={service}>
                {service === "Frukt" ? "🍎" : "🏠"} {service}
              </Text>
            ))}
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}
