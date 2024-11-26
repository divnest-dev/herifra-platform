import { RegisterForm } from "@/app/ui/forms/register-form";
import { RegisterFormSteps } from "@/app/ui/forms/register-multi-step-form";
import { Container, Heading } from "@radix-ui/themes";
export default function Register() {
  return (
    <Container
      size="1"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <div className="w-full space-y-8">
        <Heading size="6" align="center" className="tracking-tight">
          Create your account
        </Heading>
        <RegisterForm />
        <RegisterFormSteps />
      </div>
    </Container>
  );
}
