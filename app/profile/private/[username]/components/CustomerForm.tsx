import {
  Box,
  Card,
  Select,
  Text,
  TextField,
  Button,
  Flex,
} from "@radix-ui/themes";

export default function CustomerForm() {
  return (
    <Card size="3">
      <Text size="6" weight="bold" mb="4">
        Kundeforhold
      </Text>
      <Flex direction="column" gap="4">
        <Select.Root defaultValue="none">
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Tjenester</Select.Label>
              {[
                "Overnatting",
                "Taxi",
                "Kafé",
                "Frisør",
                "Gårdbesøk",
                "Restaurant",
                "Aktivitetspark",
                "Reiseliv",
                "Museer",
                "Teater",
                "Kino",
                "Bakeri",
              ].map((service) => (
                <Select.Item key={service} value={service.toLowerCase()}>
                  {service}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="none">
          <Select.Trigger placeholder="Kundetype" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Kundetype</Select.Label>
              {["Single", "Family", "Young", "Pensionist"].map((type) => (
                <Select.Item key={type} value={type.toLowerCase()}>
                  {type}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="none">
          <Select.Trigger placeholder="Kundestatus" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Status</Select.Label>
              {["Student", "Traveler", "Hotel Guest"].map((status) => (
                <Select.Item key={status} value={status.toLowerCase()}>
                  {status}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Button size="3" color="grass">
          Send forespørsel
        </Button>
      </Flex>
    </Card>
  );
}
