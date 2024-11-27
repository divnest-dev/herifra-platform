"use client";

import Image from "next/image";
import { Box, Card, Heading, Text } from "@radix-ui/themes";

const features = [
  {
    title: "Mat og drikke",
    description:
      "Morbi adipiscing duis quis nulla. Lectus morbi ut fusce tincidunt non. Id dolor malesuada in nulla risus quam dignissim porta.",
    image: "/features/food-feature-image.jpg",
  },
  {
    title: "Overnatting og velvære",
    description:
      "Morbi adipiscing duis quis nulla. Lectus morbi ut fusce tincidunt non. Id dolor malesuada in nulla risus quam dignissim porta.",
    image: "/features/overnatting-feature-image.jpg",
  },
  {
    title: "Gårdsopplevelser",
    description:
      "Morbi adipiscing duis quis nulla. Lectus morbi ut fusce tincidunt non. Id dolor malesuada in nulla risus quam dignissim porta.",
    image: "/features/farmer-feature-image.jpg",
  },
  {
    title: "Pakkeløsning",
    description:
      "Morbi adipiscing duis quis nulla. Lectus morbi ut fusce tincidunt non. Id dolor malesuada in nulla risus quam dignissim porta.",
    image: "/features/pakkelosning-feature-image.jpg",
  },
];

export function FeatureCards() {
  return (
    <>
      <Box className="space-y-8 md:space-y-12">
        <Box>
          <Heading size="8">Features & benefits</Heading>
          <Text size="3">
            Tristique lectus proin porttitor a elementum commodo sagittis
            pulvinar. Enim nibh et netus turpis diam eu augue.
          </Text>
        </Box>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <Box className="flex flex-col md:flex-row">
              <Box className="relative w-full md:w-[200px] aspect-[4/3]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </Box>
              <Box className="p-6 bg-slate-200">
                <Heading size="4" mb="2">
                  {feature.title}
                </Heading>
                <Text size="2" color="gray">
                  {feature.description}
                </Text>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
