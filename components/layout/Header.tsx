"use client";
import { NavItem } from "../navitem";
import {
  Flex, HStack, IconButton, Spacer, ClientOnly, Skeleton , Box
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun, LuDownload } from "react-icons/lu";
import Logo from "../logo";

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      w="full"
      borderBottom="1px solid"
      backgroundColor="bg"
      borderColor="border"
      alignItems="center"
    >
      <Flex px={6} py={4} align="center" maxW="6xl" mx="auto" w="full" spaceX="5px">
        <Spacer/>
        <Logo />
        <Spacer/>
        <HStack display={{ base: "none", md: "flex" }}>
          <NavItem href="/works">/Work Experience</NavItem>
          <NavItem href="/research">/Research</NavItem>
          <NavItem
            href="/ali_cv.pdf"
            download
            icon={<LuDownload />}
            ariaLabel="Download CV"
          >
            CV
          </NavItem>
        </HStack>
        <Spacer/>
        <HStack>
          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              color="panel"
              _hover={{ color: "linkHover" , border: "none"}}
              backgroundColor="bgOp"
            >
              {colorMode === "light" ? <LuMoon /> : <LuSun />}
            </IconButton>
          </ClientOnly>
        </HStack>
        <Spacer/>
      </Flex>
    </Box>
  );
}