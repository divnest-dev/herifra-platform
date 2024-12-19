"use client";

import { useState } from "react";
import {
  Button,
  TextField,
  Text,
  Flex,
  Callout,
  Select,
} from "@radix-ui/themes";

interface RegisterFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

const BaseRegisterForm = ({
  children,
  onSubmit,
}: { children: React.ReactNode } & RegisterFormProps) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(new FormData(e.currentTarget));
    } catch (err) {
      setError(`${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <Flex direction="column" gap="4">
        <TextField.Root
          name="email"
          type="email"
          placeholder="Din epost"
          required
        ></TextField.Root>

        <TextField.Root
          name="password"
          type="password"
          placeholder="Passord"
          required
        ></TextField.Root>

        {children}

        <Text size="2" color="gray">
          Flere detaljer kan fylles ut senere på din profil.
        </Text>

        <Button type="submit" disabled={loading}>
          {loading ? "Oppretter konto..." : "Opprett konto"}
        </Button>
      </Flex>
    </form>
  );
};

export function PrivateRegisterForm() {
  return (
    <BaseRegisterForm
      onSubmit={async (data) => {
        // Handle private registration
        console.log(data);
      }}
    >
      <TextField.Root
        name="username"
        placeholder="Brukernavn"
        required
      ></TextField.Root>
    </BaseRegisterForm>
  );
}

export function BusinessRegisterForm() {
  return (
    <BaseRegisterForm
      onSubmit={async (data) => {
        // Handle business registration
        console.log(data);
      }}
    >
      <TextField.Root
        name="businessName"
        placeholder="Foretaksnavn"
        required
      ></TextField.Root>
      <TextField.Root name="orgNumber" placeholder="Org.nummer" required>
        <TextField.Slot />
      </TextField.Root>
      <Select.Root name="businessType" required>
        <Select.Trigger placeholder="Velg type virksomhet" />
        <Select.Content>
          <Select.Item value="food">Restaurant/Mat</Select.Item>
          <Select.Item value="accommodation">Overnatting</Select.Item>
          <Select.Item value="activity">Aktiviteter</Select.Item>
          <Select.Item value="other">Annet</Select.Item>
        </Select.Content>
      </Select.Root>
    </BaseRegisterForm>
  );
}
