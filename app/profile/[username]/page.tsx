"use client";

import { Box, Card, Flex, Text, Button, Avatar } from "@radix-ui/themes";
import CustomerForm from "./components/CustomerForm";
import SettingsPanel from "./components/SettingsPanel";
import { useState } from "react";
export default function PrivateProfile({
  params,
}: {
  params: { username: string };
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const profile = {
    name: "Chuck Norris",
    email: "test@mail.com",
    location: "6150 Ørsta",
    services: ["Frukt", "Overnatting"],
    image: "/placeholder.jpg",
  };
  return (
    <>
      <div className="w-full">
        <Flex justify="between" align="center" mb="6">
          <Text size="8" weight="bold">
            Din profil
          </Text>
          <Button variant="solid" color="gray">
            Log out
          </Button>
        </Flex>
        <Flex gap="3" mb="6">
          <Button
            variant={activeTab === "dashboard" ? "solid" : "soft"}
            color="grass"
            onClick={() => setActiveTab("dashboard")}
          >
            Legg inn kundeforhold
          </Button>
          <Button
            variant={activeTab === "subscription" ? "solid" : "soft"}
            color="amber"
            onClick={() => setActiveTab("subscription")}
          >
            Ditt abbonnement
          </Button>
          <Button
            variant={activeTab === "help" ? "solid" : "soft"}
            color="red"
            onClick={() => setActiveTab("help")}
          >
            Help
          </Button>
          <Button
            variant={activeTab === "settings" ? "solid" : "soft"}
            color="gray"
            onClick={() => setActiveTab("settings")}
          >
            Innstillinger
          </Button>
        </Flex>
        <Card size="3">
          <Flex gap="4">
            <Avatar size="6" src={profile.image} fallback="CN" />
            <Box>
              <Text size="6" weight="bold" mb="2">
                Profildetaljer
              </Text>
              <Box>
                <Flex direction="column">
                  <Text size="4">{profile.name}</Text>
                  <Text size="3" color="gray">
                    {profile.email}
                  </Text>
                  <Text size="3" color="gray">
                    {profile.location}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>

          <Box mt="6">
            <Text size="5" mb="4">
              Din profil viser at har tjenester eller at du selger
            </Text>
            <Flex gap="4">
              {profile.services.map((service) => (
                <Text key={service}>
                  {service === "Frukt" ? "🍎" : "🏠"} {service}
                </Text>
              ))}
            </Flex>
          </Box>
        </Card>
        <Box mt="6">
          {activeTab === "dashboard" && <CustomerForm />}
          {activeTab === "settings" && <SettingsPanel />}
        </Box>
      </div>
    </>
  );
}
