"use client";

import { useState } from "react";
import { Button, TextField, Text, Flex, Callout } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function RegisterForm() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Add your registration logic here
      console.log("Registration attempt", { email, password });
    } catch (err) {
      console.error(error);
      setError("Failed to create account");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <Flex direction="column" gap="2">
        <Text as="label" size="2" weight="bold">
          Email
        </Text>
        <TextField.Root
          placeholder="Enter your email"
          name="email"
          type="email"
          required
        >
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text as="label" size="2" weight="bold">
          Password
        </Text>
        <TextField.Root
          name="password"
          type="password"
          required
          placeholder="Create a password"
        >
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text as="label" size="2" weight="bold">
          Confirm Password
        </Text>
        <TextField.Root
          name="confirmPassword"
          type="password"
          required
          placeholder="Confirm your password"
        ></TextField.Root>
      </Flex>

      <Button
        type="submit"
        disabled={loading}
        variant="solid"
        size="3"
        className="w-full"
      >
        {loading ? "Creating account..." : "Create account"}
      </Button>

      <Text align="center" size="2">
        <Link href="/login" className="text-blue-600 hover:text-blue-500">
          Already have an account? Sign in
        </Link>
      </Text>
    </form>
  );
}
