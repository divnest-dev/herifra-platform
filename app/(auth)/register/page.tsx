import { RegisterFormSteps } from "@/app/ui/forms/register-multi-step-form";
import { Text, Box } from "@radix-ui/themes";
import { RegisterForm } from "@/app/ui/forms/register-form";
export default function Register() {
  return (
    <>
      <Box mb="6">
        <Text weight="bold" size="8" align="center">
          Create Account
        </Text>
        <Text size="2" color="gray" align="center">
          Get started with your account
        </Text>
      </Box>
      <RegisterForm />
      <RegisterFormSteps />
    </>
  );
}
