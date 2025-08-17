"use client";
import { NavItem } from "../navitem";
import {
  Flex, HStack, IconButton, Spacer, ClientOnly, Skeleton , Box,  Portal, Drawer, CloseButton, VStack
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun, LuDownload, LuMenu, LuX } from "react-icons/lu";
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
        {/* Mobile: Drawer + hamburger */}
        <Drawer.Root placement="start">
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Open menu"
              variant="ghost"
              size="sm"
              display={{ base: "inline-flex", md: "none" }}
              backgroundColor="bgOp"
              _hover={{ color: "linkHover", border: "none" }}
            >
              <LuMenu />
            </IconButton>
          </Drawer.Trigger>

          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content backgroundColor="bg" borderRight="1px solid" borderColor="border">
                <Drawer.Header display="flex" alignItems="center" justifyContent="space-between">
                  Menu
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Header>

                {/* Use Drawer.Context to close on link click */}
                <Drawer.Context>
                  {(store) => (
                    <Drawer.Body>
                      <VStack align="stretch" mt={2}>
                        <NavItem href="/works" onClick={() => store.setOpen(false)}>
                          /Work Experience
                        </NavItem>
                        <NavItem href="/research" onClick={() => store.setOpen(false)}>
                          /Research
                        </NavItem>
                        <NavItem
                          href="/ali_cv.pdf"
                          download
                          icon={<LuDownload />}
                          ariaLabel="Download CV"
                          onClick={() => store.setOpen(false)}
                        >
                          CV
                        </NavItem>
                      </VStack>
                    </Drawer.Body>
                  )}
                </Drawer.Context>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
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