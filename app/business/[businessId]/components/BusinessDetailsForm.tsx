"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Flex,
  Text,
  Button,
  TextField,
  Select,
  IconButton,
  Tabs,
} from "@radix-ui/themes";
import { FileIcon, TrashIcon, PlusIcon } from "@radix-ui/react-icons";
import type { BusinessData } from "../utils/mockData";

interface BusinessDetailsFormProps {
  initialData: BusinessData;
  onSubmit: (data: Partial<BusinessData>) => void;
}

interface ManualPrice {
  description: string;
  price: string;
}

export function BusinessDetailsForm({
  initialData,
  onSubmit,
}: BusinessDetailsFormProps) {
  const [formData, setFormData] = useState<BusinessData>(initialData);
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [manualPrices, setManualPrices] = useState<ManualPrice[]>([
    { description: "", price: "390" },
  ]);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      services: [
        ...formData.services,
        ...(selectedService === "other" && otherService
          ? [{ name: otherService, icon: "🔧", price: "0" }]
          : []),
      ],
    });
  };

  const handleChange =
    (field: keyof BusinessData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

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
    <Card size="3">
      <form onSubmit={handleSubmit}>
        <Tabs.Root defaultValue="general">
          <Tabs.List>
            <Tabs.Trigger value="general">Generelt</Tabs.Trigger>
            <Tabs.Trigger value="services">Tjenester</Tabs.Trigger>
            <Tabs.Trigger value="marketing">Markedsdetaljer</Tabs.Trigger>
          </Tabs.List>

          <Box pt="6">
            <Tabs.Content value="general">
              <Flex direction="column" gap="4">
                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    Bedriftsnavn
                  </Text>
                  <TextField.Root
                    value={formData.name}
                    onChange={handleChange("name")}
                    placeholder="Skriv inn bedriftsnavn"
                    required
                  ></TextField.Root>
                </Box>

                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    Kontaktperson
                  </Text>
                  <TextField.Root
                    value={formData.owner}
                    onChange={handleChange("owner")}
                    placeholder="Skriv inn navn på kontaktperson"
                  ></TextField.Root>
                </Box>

                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    E-post
                  </Text>
                  <TextField.Root
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="Skriv inn e-postadresse"
                  ></TextField.Root>
                </Box>

                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    Telefon
                  </Text>
                  <TextField.Root
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    placeholder="Skriv inn telefonnummer"
                  ></TextField.Root>
                </Box>

                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    Org. nummer
                  </Text>
                  <TextField.Root
                    name="orgNumber"
                    placeholder="Skriv inn organisasjonsnummer"
                    required
                  ></TextField.Root>
                </Box>

                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    Adresse
                  </Text>
                  <TextField.Root
                    value={formData.location}
                    onChange={handleChange("location")}
                    placeholder="Skriv inn adresse"
                  ></TextField.Root>
                </Box>

                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
                    Beskrivelse
                  </Text>
                  <TextField.Root
                    value={formData.description}
                    onChange={handleChange("description")}
                    placeholder="Skriv inn beskrivelse av bedriften"
                  ></TextField.Root>
                </Box>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="services">
              <Flex direction="column" gap="4">
                <Box>
                  <Text as="label" size="2" weight="bold" mb="2">
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
                </Box>

                {selectedService === "other" && (
                  <Box>
                    <Text as="label" size="2" weight="bold" mb="2">
                      Spesifiser tjeneste
                    </Text>
                    <TextField.Root
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      placeholder="Skriv inn tjeneste"
                      required
                    ></TextField.Root>
                  </Box>
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
                    <TextField.Root>
                      <TextField.Slot>
                        <FileIcon height="16" width="16" />
                      </TextField.Slot>
                      <TextField.Root
                        value={pdfFile?.name || ""}
                        placeholder="Prisliste.pdf"
                        readOnly
                      ></TextField.Root>
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
                          updateManualPrice(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        placeholder="Tekst her..."
                      ></TextField.Root>
                      <TextField.Root
                        value={item.price}
                        onChange={(e) =>
                          updateManualPrice(index, "price", e.target.value)
                        }
                        type="number"
                      ></TextField.Root>
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

        <Flex justify="end" mt="6">
          <Button type="submit" size="3">
            {initialData ? "Oppdater detaljer" : "Registrer"}
          </Button>
        </Flex>
      </form>
    </Card>
  );
}
