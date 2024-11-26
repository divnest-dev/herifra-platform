"use client";

import { useState } from "react";
import {
  Button,
  TextField,
  Text,
  Flex,
  Select,
  IconButton,
  Box,
  Tabs,
} from "@radix-ui/themes";
import { FileIcon, TrashIcon, PlusIcon } from "@radix-ui/react-icons";

interface ManualPrice {
  description: string;
  price: string;
}

export function RegisterFormSteps() {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [manualPrices, setManualPrices] = useState<ManualPrice[]>([
    { description: "", price: "390" },
  ]);

  const addManualPrice = () => {
    setManualPrices([...manualPrices, { description: "", price: "390" }]);
  };

  const removeManualPrice = (index: number) => {
    setManualPrices(manualPrices.filter((_, i) => i !== index));
  };

  const updateManualPrice = (
    index: number,
    field: keyof ManualPrice,
    value: string
  ) => {
    const updated = manualPrices.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setManualPrices(updated);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <Tabs.Root defaultValue="general">
        <Tabs.List>
          <Tabs.Trigger value="general">Generelt</Tabs.Trigger>
          <Tabs.Trigger value="services">Tjenester</Tabs.Trigger>
          <Tabs.Trigger value="marketing">Markedsdetaljer</Tabs.Trigger>
        </Tabs.List>

        <Box pt="6">
          <Tabs.Content value="general">
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2">
                <Text as="label" size="2" weight="bold">
                  Bedriftsnavn
                </Text>
                <TextField.Root
                  name="companyName"
                  placeholder="Legg inn bedriftsnavn"
                  required
                ></TextField.Root>
              </Flex>

              <Flex direction="column" gap="2">
                <Text as="label" size="2" weight="bold">
                  E-mail
                </Text>
                <TextField.Root
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                ></TextField.Root>
              </Flex>

              <Flex direction="column" gap="2">
                <Text as="label" size="2" weight="bold">
                  Org. nummer
                </Text>
                <TextField.Root
                  name="orgNumber"
                  placeholder="Enter your organization number"
                  required
                ></TextField.Root>
              </Flex>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="services">
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2">
                <Text as="label" size="2" weight="bold">
                  Tjenester
                </Text>
                <Select.Root
                  value={selectedService}
                  onValueChange={setSelectedService}
                >
                  <Select.Trigger placeholder="Velg tjeneste" />
                  <Select.Content>
                    <Select.Group>
                      <Select.Item value="food">Mat</Select.Item>
                      <Select.Item value="transport">Transport</Select.Item>
                      <Select.Item value="farmers">Gårdbrukere</Select.Item>
                      <Select.Item value="other">Annet</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Flex>

              {selectedService === "other" && (
                <Flex direction="column" gap="2">
                  <Text as="label" size="2" weight="bold">
                    Spesifiser tjeneste
                  </Text>
                  <TextField.Root
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    placeholder="Skriv inn tjeneste"
                    required
                  ></TextField.Root>
                </Flex>
              )}
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="marketing">
            <Flex direction="column" gap="4">
              <Box>
                <Text as="label" size="2" weight="bold" mb="2">
                  Last opp prisliste (pdf)
                </Text>
                <Flex gap="2">
                  <TextField.Root
                    value={pdfFile?.name || ""}
                    placeholder="Prisliste.pdf"
                    readOnly
                  >
                    <TextField.Slot>
                      <FileIcon height="16" width="16" />
                    </TextField.Slot>
                  </TextField.Root>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    id="pdf-upload"
                  />
                  <Button asChild>
                    <label htmlFor="pdf-upload">Last opp</label>
                  </Button>
                  {pdfFile && (
                    <IconButton
                      color="red"
                      variant="soft"
                      onClick={() => setPdfFile(null)}
                    >
                      <TrashIcon />
                    </IconButton>
                  )}
                </Flex>
              </Box>

              <Box>
                <Text as="label" size="2" weight="bold" mb="2">
                  Manuell prisliste
                </Text>
                {manualPrices.map((item, index) => (
                  <Flex key={index} gap="2" mb="2">
                    <TextField.Root
                      value={item.description}
                      onChange={(e) =>
                        updateManualPrice(index, "description", e.target.value)
                      }
                      placeholder="Tekst her..."
                    ></TextField.Root>
                    <TextField.Root
                      value={item.price}
                      onChange={(e) =>
                        updateManualPrice(index, "price", e.target.value)
                      }
                      type="number"
                    >
                      <TextField.Slot>
                        <Text>KR</Text>
                      </TextField.Slot>
                    </TextField.Root>
                    <IconButton
                      color="red"
                      variant="soft"
                      onClick={() => removeManualPrice(index)}
                    >
                      <TrashIcon />
                    </IconButton>
                    <IconButton
                      color="green"
                      variant="soft"
                      onClick={addManualPrice}
                    >
                      <PlusIcon />
                    </IconButton>
                  </Flex>
                ))}
              </Box>
            </Flex>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <Flex justify="end">
        <Button type="submit" size="3">
          Registrer
        </Button>
      </Flex>
    </form>
  );
}
