import { Text, Box, Tabs } from "@radix-ui/themes";
// import { BaseRegisterForm } from "@/app/ui/forms/register-form";
import {
  PrivateRegisterForm,
  BusinessRegisterForm,
} from "@/app/ui/forms/register-form";

export default function Register() {
  return (
    <Box className="max-w-md w-full">
      <Box mb="6">
        <Text weight="bold" size="8" align="center">
          Lag en profil
        </Text>
      </Box>
      <Tabs.Root defaultValue="private">
        <Tabs.List>
          <Tabs.Trigger value="private">Vanlig</Tabs.Trigger>
          <Tabs.Trigger value="business">Business</Tabs.Trigger>
        </Tabs.List>
        <Box pt="6">
          <Tabs.Content value="private">
            <PrivateRegisterForm />
          </Tabs.Content>
          <Tabs.Content value="business">
            <BusinessRegisterForm />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
}
