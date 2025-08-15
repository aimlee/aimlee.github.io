"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import system from "@/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ChakraProvider value={system}>
        <Box minH="100dvh" bg="bg" color="text">
          {children}
        </Box>
      </ChakraProvider>
    </ThemeProvider>
  );
}