"use client";

// import { BusinessData } from "./types";
import { BusinessData } from "../types";
import { useState } from "react";
import Image from "next/image";
import { Box, Card, Flex, Text, Button, Avatar, Grid } from "@radix-ui/themes";

interface BusinessProfileProps {
  data: BusinessData;
  isOwner?: boolean;
}

export function BusinessProfile({
  data,
  isOwner = true,
}: BusinessProfileProps) {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <Grid columns="2" gap="6">
      {/* Main Content */}
      <Box className="col-span-1">
        <Card size="3" mb="4">
          <Flex gap="4" align="center">
            <Avatar
              size="7"
              src={data.images?.[0] || "/placeholder.jpg"}
              fallback={data.name?.[0] || "B"}
            />
            <Box>
              <Flex direction="column">
                <Text size="7" weight="bold" mb="1">
                  {data.name}
                </Text>
                <Text size="3" color="gray">
                  Drevet av {data.owner}
                </Text>
              </Flex>
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
          {isOwner && (
            <Button
              variant="soft"
              onClick={() => (window.location.href = `${data.id}/dashboard`)}
            >
              Rediger profil
            </Button>
          )}
        </Flex>

        {activeTab === "info" && (
          <Card size="4">
            <Text size="5" mb="9">
              {data.description}
            </Text>
            <Grid columns="2" gap="4">
              <Box>
                <Flex direction="column">
                  <Text weight="bold" mb="2">
                    Åpningstider
                  </Text>
                  <Text size="2">Man-Fre: {data.openingHours.mon_fri}</Text>
                  <Text size="2">Lørdag: {data.openingHours.sat}</Text>
                  <Text size="2">Søndag: {data.openingHours.sun}</Text>
                </Flex>
              </Box>
              <Box>
                <Text weight="bold" mb="2">
                  Kontaktinformasjon
                </Text>
                <Flex align="center" gap="2" mb="1">
                  <Text size="2">{data.phone}</Text>
                </Flex>
                <Flex align="center" gap="2" mb="1">
                  <Text size="2">{data.email}</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Text size="2">{data.location}</Text>
                </Flex>
              </Box>
            </Grid>
          </Card>
        )}

        {activeTab === "products" && (
          <Card size="3">
            <Grid columns="2" gap="4">
              {data.services.map((service) => (
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
              {data.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={300}
                  height={200}
                  alt={`${data.name} - Bilde ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </Grid>
          </Card>
        )}
      </Box>
    </Grid>
  );
}
