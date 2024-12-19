"use client";

// import { useState } from "react";
import { Box } from "@radix-ui/themes";
import { BusinessDetailsForm } from "@/app/business/[businessId]/components/BusinessDetailsForm";
// import { useRouter } from "next/navigation";

export default function BusinessSettings() {
  //   const router = useRouter();

  /*

  Supabase logic is comment out

  const handleSubmit = async (formData: any) => {
    try {
      // TODO: Add Supabase integration
      // Example structure for saving to Supabase:
      // const { data, error } = await supabase
      //   .from('businesses')
      //   .upsert({
      //     name: formData.companyName,
      //     email: formData.email,
      //     org_number: formData.orgNumber,
      //     services: formData.services,
      //     price_list_url: formData.pdfUrl,
      //     manual_prices: formData.manualPrices
      //   });

      // if (error) throw error;

      // Redirect back to dashboard after successful submission
      router.push("/profile/dashboard");
    } catch (error) {
      console.error("Error saving business data:", error);
    }
  };

    */
  // onSubmit={handleSubmit} on BusinessDetailsForm
  return (
    <Box className="max-w-3xl mx-auto">
      <BusinessDetailsForm />
    </Box>
  );
}
