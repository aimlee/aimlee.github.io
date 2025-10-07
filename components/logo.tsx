import NextLink from "next/link";
import { Link as ChakraLink, Text, Box } from '@chakra-ui/react'

const FootprintIcon = () => (
  <svg 
    width="20px" 
    height="20px" 
    viewBox="0 0 16 16" 
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path 
      d="M0 16h16V0H0v16zm2-2V2h12v12H2zm2-7h2V5H4v2zm6 0h2V5h-2v2zm-5 5h1v-2H5a1 1 0 1 0 0 2zm5 0h1a1 1 0 0 0 0-2h-1v2zm-3 0h2v-2H7v2z" 
      fillRule="evenodd"
    />
  </svg>
)


const Logo = () => {
  return (
    <ChakraLink
      as={NextLink}
      href="/"
      display="inline-flex"
      alignItems="center"
      p="2.5"
      borderRadius="8px"
      color="inherit"
      role="group"   
      _hover={{ textDecoration: "none", bg: "rgba(243,156,18,0.1)" }}
    >
      <Box
        as="span"
        display="inline-flex"
        transition="transform 200ms ease, color 200ms ease"
        willChange="transform"
        _groupHover={{
          transform: "translateY(-1px) rotate(20deg)", // move + rotate
          color: "accent",                              // uses your semantic token
        }}
      >
        <FootprintIcon />
      </Box>
      <Text
        ml={3}
        color="inherit"                           // inherits `text` token from header
        fontFamily="'M PLUS Rounded 1c', sans-serif"
        fontWeight="bold"
      >
        Alex Corbin
      </Text>
    </ChakraLink>
  );
}

export default Logo;
