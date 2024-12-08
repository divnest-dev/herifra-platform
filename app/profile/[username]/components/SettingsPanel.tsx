import {
  Box,
  Card,
  Flex,
  Text,
  TextField,
  Button,
  Select,
  Avatar,
} from "@radix-ui/themes";

export default function SettingsPanel() {
  return (
    <Card size="3">
      <Text size="6" weight="bold" mb="4">
        Innstillinger
      </Text>
      <Flex direction="column" gap="4">
        <Flex gap="3">
          <TextField.Root placeholder="Fornavn">
            <TextField.Slot />
          </TextField.Root>
          <TextField.Root placeholder="Etternavn">
            <TextField.Slot />
          </TextField.Root>
        </Flex>

        <TextField.Root placeholder="Adresse">
          <TextField.Slot />
        </TextField.Root>

        <Select.Root defaultValue="none">
          <Select.Trigger placeholder="Kjønn" />
          <Select.Content>
            <Select.Item value="male">Mann</Select.Item>
            <Select.Item value="female">Kvinne</Select.Item>
            <Select.Item value="other">Annet</Select.Item>
          </Select.Content>
        </Select.Root>

        <Box>
          <Text size="2" mb="2">
            Profilbilde
          </Text>
          <Avatar size="6" src="/placeholder.jpg" fallback="AB" />
          <Button size="2" variant="soft" ml="3">
            Last opp bilde
          </Button>
        </Box>

        <Button size="3">Lagre endringer</Button>
      </Flex>
    </Card>
  );
}
