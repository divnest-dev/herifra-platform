import { Container } from "@radix-ui/themes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      size="1"
      className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12"
    >
      <div className="w-full max-w-md">{children}</div>
    </Container>
  );
}
