"use client";

import { useState } from "react";
import {
  Button,
  TextField,
  Text,
  Flex,
  Tabs,
  Box,
  Callout,
} from "@radix-ui/themes";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

export function LoginForm() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // Add your login logic here
      console.log("Login attempt", { email, password });

      // Example error handling
      // throw new Error("Invalid credentials");
    } catch (error) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className="w-full max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-6">
        <Flex direction="column" gap="5">
          {error && (
            <Callout.Root color="red">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
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
            ></TextField.Root>
          </Flex>

          <Flex direction="column" gap="2">
            <Text as="label" size="2" weight="bold">
              Password
            </Text>
            <TextField.Root
              placeholder="Enter your password"
              name="password"
              type="password"
              required
            ></TextField.Root>
          </Flex>

          <Flex direction="column" gap="3">
            <Button type="submit" disabled={loading} size="3">
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            <Button size="3" variant="surface">
              Login with Google
            </Button>

            <Text align="center" size="2" color="gray">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-500 hover:text-blue-600"
              >
                Sign up
              </Link>
            </Text>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
}
