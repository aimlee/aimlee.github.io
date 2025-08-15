"use client";
import { Box } from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import QuickAbout from "@/components/sections/QuickAbout";

export default function Home() {
  return (
     <Box alignItems="center">
      <Header />
      <Hero />
      <QuickAbout />
    </Box>
  );
}