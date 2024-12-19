import { LoginForm } from "@/app/ui/forms/login-form";
import { Text, Box, Flex } from "@radix-ui/themes";
export default function Login() {
  return (
    <>
      <Box mb="6">
        <Flex direction="column">
          <Text weight="bold" size="8" mb="4" align="center">
            Logg inn
          </Text>
          <Text size="2" color="gray" align="center">
            Logg inn med e-post og passord.
          </Text>
        </Flex>
      </Box>
      <LoginForm />
    </>
  );
}
