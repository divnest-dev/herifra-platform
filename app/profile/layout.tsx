import { Container } from "@radix-ui/themes";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <Container size="4" className="w-full max-w-[1200px] py-12">
        {children}
      </Container>
    </div>
  );
}
