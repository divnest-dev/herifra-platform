"use client";

import { useState, useEffect } from "react";
import { Box, Card, Flex, Text, Button, Avatar, Grid } from "@radix-ui/themes";
import { BusinessDetailsForm } from "./BusinessDetailsForm";
import { useRouter } from "next/navigation";
import { getMockBusinessData } from "../utils/mockData";
import {
  initializeMockData,
  getMockData,
  updateMockData,
} from "../utils/mockDataManager";

import type { BusinessData } from "../utils/mockData";

interface DashboardContentProps {
  businessId: string;
}

export function DashboardContent({ businessId }: DashboardContentProps) {
  const router = useRouter();
  const [showSettings, setShowSettings] = useState(false);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);

  useEffect(() => {
    // Initialize mock data if it doesn't exist
    const initialData = getMockBusinessData(businessId);
    const data = initializeMockData(businessId, initialData);
    setBusinessData(data);
  }, [businessId]);

  const handleEditProfile = () => {
    setShowSettings(true);
  };

  const handleViewPublicProfile = () => {
    router.push(`/business/${businessId}`);
  };

  const handleUpdateBusinessData = (updatedData: Partial<BusinessData>) => {
    if (businessData) {
      const updated = updateMockData(businessId, updatedData);
      setBusinessData(updated);
      setShowSettings(false);
    }
  };

  const handleLogout = () => {
    router.push("/login");
  };

  if (!businessData) {
    return <div>Loading...</div>;
  }

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
        <BusinessDetailsForm
          initialData={businessData}
          onSubmit={handleUpdateBusinessData}
        />
      </Box>
    );
  }

  return (
    <Box className="w-full">
      <Flex justify="between" align="center" mb="6">
        <Text size="8" weight="bold">
          Bedriftsoversikt
        </Text>
        <Flex gap="3">
          <Button variant="solid" color="grass" onClick={handleEditProfile}>
            Endre detaljer
          </Button>
          <Button variant="soft" color="blue" onClick={handleViewPublicProfile}>
            Se offentlig profil
          </Button>
          <Button variant="soft" color="gray" onClick={handleLogout}>
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
              {businessData.statistics.monthlyVisits}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" color="gray">
              Aktive kunder
            </Text>
            <Text size="6" weight="bold">
              {businessData.statistics.activeCustomers}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" color="gray">
              Totale bestillinger
            </Text>
            <Text size="6" weight="bold">
              {businessData.statistics.totalBookings}
            </Text>
          </Flex>
        </Card>
      </Grid>

      <Card size="3">
        <Flex gap="4">
          <Avatar
            size="6"
            src={businessData.images[0]}
            fallback={businessData.name[0]}
          />
          <Box>
            <Text size="6" weight="bold" mb="2">
              Bedriftsdetaljer
            </Text>
            <Flex direction="column">
              <Text size="4">{businessData.name}</Text>
              <Text size="3" color="gray">
                {businessData.email}
              </Text>
              <Text size="3" color="gray">
                {businessData.location}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Box mt="6">
          <Text size="5" mb="4">
            Registrerte tjenester
          </Text>
          <Flex gap="4">
            {businessData.services.map((service) => (
              <Text key={service.name}>
                {service.icon} {service.name}
              </Text>
            ))}
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}
