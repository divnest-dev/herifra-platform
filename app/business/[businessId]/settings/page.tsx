"use client";

import { BusinessDetailsForm } from "../components/BusinessDetailsForm";
import { Box, Text } from "@radix-ui/themes";

export default function SettingsPage() {
  return (
    <Box className="w-full max-w-5xl mx-auto">
      <Text size="8" weight="bold" mb="6">
        Bedriftsinnstillinger
      </Text>
      <BusinessDetailsForm />
    </Box>
  );
}
