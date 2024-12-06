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
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
      setError("Registration failed");
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
        <TextField.Root name="email" type="email" placeholder="Email" required>
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>

        <TextField.Root
          name="password"
          type="password"
          placeholder="Password"
          required
        >
          <TextField.Slot>
            <LockClosedIcon />
          </TextField.Slot>
        </TextField.Root>

        {children}

        <Text size="2" color="gray">
          Additional details can be filled in later from your profile settings
        </Text>

        <Button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
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
      }}
    >
      <TextField.Root
        name="username"
        placeholder="Username"
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
      }}
    >
      <TextField.Root
        name="businessName"
        placeholder="Business Name"
        required
      ></TextField.Root>
      <TextField.Root
        name="orgNumber"
        placeholder="Organization Number"
        required
      >
        <TextField.Slot />
      </TextField.Root>
      <Select.Root name="businessType" required>
        <Select.Trigger placeholder="Business Type" />
        <Select.Content>
          <Select.Item value="food">Restaurant/Food</Select.Item>
          <Select.Item value="accommodation">Accommodation</Select.Item>
          <Select.Item value="activity">Activities</Select.Item>
          <Select.Item value="other">Other</Select.Item>
        </Select.Content>
      </Select.Root>
    </BaseRegisterForm>
  );
}
