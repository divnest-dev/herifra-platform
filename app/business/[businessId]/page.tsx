"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Card, Flex, Text, Button, Avatar, Grid } from "@radix-ui/themes";

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
};

export default function BusinessProfile() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <Grid columns="5" gap="6">
      {/* Main Content - 3 columns */}
      <Box className="col-span-3">
        <Card size="3" mb="4">
          <Flex gap="4" align="center">
            <Avatar
              size="7"
              src={businessData.images[0]}
              fallback={businessData.name[0]}
            />
            <Box>
              <Text size="7" weight="bold" mb="1">
                {businessData.name}
              </Text>
              <Text size="3" color="gray">
                Drevet av {businessData.owner}
              </Text>
            </Box>
          </Flex>
        </Card>

        <Flex gap="3" mb="4">
          <Button
            variant={activeTab === "info" ? "solid" : "soft"}
            onClick={() => setActiveTab("info")}
          >
            Om oss
          </Button>
          <Button
            variant={activeTab === "products" ? "solid" : "soft"}
            onClick={() => setActiveTab("products")}
          >
            Produkter
          </Button>
          <Button
            variant={activeTab === "gallery" ? "solid" : "soft"}
            onClick={() => setActiveTab("gallery")}
          >
            Galleri
          </Button>
        </Flex>

        {activeTab === "info" && (
          <Card size="3">
            <Text size="5" mb="4">
              {businessData.description}
            </Text>
            <Grid columns="2" gap="4">
              <Box>
                <Text weight="bold" mb="2">
                  Åpningstider
                </Text>
                <Text size="2">
                  Man-Fre: {businessData.openingHours.mon_fri}
                </Text>
                <Text size="2">Lørdag: {businessData.openingHours.sat}</Text>
                <Text size="2">Søndag: {businessData.openingHours.sun}</Text>
              </Box>
              <Box>
                <Text weight="bold" mb="2">
                  Kontaktinformasjon
                </Text>
                <Flex align="center" gap="2" mb="1">
                  <Text size="2">{businessData.phone}</Text>
                </Flex>
                <Flex align="center" gap="2" mb="1">
                  <Text size="2">{businessData.email}</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Text size="2">{businessData.location}</Text>
                </Flex>
              </Box>
            </Grid>
          </Card>
        )}

        {activeTab === "products" && (
          <Card size="3">
            <Grid columns="2" gap="4">
              {businessData.services.map((service) => (
                <Card key={service.name} variant="surface">
                  <Flex gap="2" align="center" mb="2">
                    <Text size="6">{service.icon}</Text>
                    <Text weight="bold">{service.name}</Text>
                  </Flex>
                  <Text size="3" color="gray">
                    {service.price}
                  </Text>
                </Card>
              ))}
            </Grid>
          </Card>
        )}

        {activeTab === "gallery" && (
          <Card size="3">
            <Grid columns="3" gap="3">
              {businessData.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${businessData.name} - Bilde ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </Grid>
          </Card>
        )}
      </Box>

      {/* Sidebar - 2 columns */}
      <Box className="col-span-2">
        <Card size="3">
          <Text size="5" weight="bold" mb="4">
            Bestill time
          </Text>
          <Flex direction="column" gap="2">
            <Button size="3">Book now</Button>
            <Text size="2" color="gray" align="center">
              eller ring {businessData.phone}
            </Text>
          </Flex>
        </Card>
      </Box>
    </Grid>
  );
}
