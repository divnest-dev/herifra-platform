import { Box, Card, Flex, Text, Button, Badge } from "@radix-ui/themes";

export default function SubscriptionPanel() {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: ["Basic features", "Limited access"],
    },
    {
      name: "Basic",
      price: "99",
      features: ["Full access", "Priority support"],
    },
    {
      name: "Professional",
      price: "199",
      features: ["Advanced features", "24/7 support"],
    },
  ];

  return (
    <Card size="3">
      <Text size="6" weight="bold" mb="4">
        Abonnement
      </Text>
      <Flex gap="4">
        {plans.map((plan) => (
          <Card key={plan.name} size="2">
            <Text size="5" weight="bold">
              {plan.name}
            </Text>
            <Text size="6" mt="2">
              {plan.price} kr/mnd
            </Text>
            <Box my="4">
              {plan.features.map((feature) => (
                <Text key={feature} size="2" color="gray" as="div">
                  ✓ {feature}
                </Text>
              ))}
            </Box>
            <Button size="2" variant="soft">
              Velg plan
            </Button>
          </Card>
        ))}
      </Flex>
    </Card>
  );
}
