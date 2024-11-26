import { LoginForm } from "@/app/ui/forms/login-form";
import { Text, Box } from "@radix-ui/themes";
export default function Login() {
  return (
    <>
      <Box mb="6">
        <Text weight="bold" size="8" align="center">
          Login
        </Text>
        <Text size="2" color="gray" align="center">
          Welcome back! Please enter your details.
        </Text>
      </Box>
      <LoginForm />
    </>
  );
}
