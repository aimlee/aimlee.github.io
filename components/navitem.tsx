"use client";
import NextLink from "next/link";
import { Link as ChakraLink, Box } from "@chakra-ui/react";
import * as React from "react";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  download?: boolean;        // use for files
  ariaLabel?: string;        // optional a11y label
  onClick?: () => void; 
};

export function NavItem({ href, children, icon, download, ariaLabel, onClick}: NavItemProps) {
  // If it's a file download, render a plain <a>. Otherwise, use NextLink for routing.
  const linkProps = download
    ? { as: "a" as const, href, download: "" }
    : { as: NextLink, href };

  return (
    <ChakraLink
      {...linkProps}
      role="group"
      display="inline-flex"
      alignItems="center"
      gap="2"
      color="inherit"                               // inherits header "text"
      _hover={{ color: "linkHover", textDecoration: "none" }}
      aria-label={ariaLabel}
      onClick={onClick}     
    >
      {icon && (
        <Box
          as="span"
          aria-hidden="true"
          transition="transform 200ms ease"
          _groupHover={{ transform: "translateY(-1px)" }} // subtle nudge on hover
        >
          {icon}
        </Box>
      )}
      {children}
    </ChakraLink>
  );
}