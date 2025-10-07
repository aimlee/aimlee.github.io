"use client"
import React, { useCallback, useEffect, useState } from "react";
import { 
  Box, 
  Text, 
  Heading, 
  Button, 
  VStack, 
  HStack,
  Container,
  chakra
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion components
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);


const TypewriterPosition = () => {
  const POSITIONSs = ['AI/ML', 'Software', 'Full-Stack'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const currentPosition = POSITIONSs[currentIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPosition.length) {
          setDisplayText(currentPosition.substring(0, displayText.length + 1));
          setTypeSpeed(Math.random() * 100 + 50); // Random typing speed
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentPosition.substring(0, displayText.length - 1));
          setTypeSpeed(50); // Faster deletion
        } else {
          // Finished deleting, move to next position
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % POSITIONSs.length);
          setTypeSpeed(150);
          return;
        }
      }
    };

    const timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typeSpeed, POSITIONSs]);

  return (
    <MotionText
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      fontSize="xs"
      letterSpacing="widest"
      textTransform="uppercase"
      color="text"
      fontFamily="mono"
    >
      <Text as="span" color="accent1">
        {displayText}
      </Text>
      <Text as="span" color="accent1">
        {displayText.length > 0 || !isDeleting ? '' : ''}
      </Text>
      <Text as="span" color="white"> Engineer</Text>
      <Text as="span" color="gray.500"> · Adelaide, Australia</Text>
      <Text 
        as="span" 
        color="accent1" 
        opacity={0.7}
        ml={1}
        animation="pulse 1s infinite"
      >
        |
      </Text>
    </MotionText>
  );
};

export default function Hero() {
  const scrollToAbout = useCallback(() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const downloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/ali_cv.pdf";              // put the file in /public
    link.setAttribute("download", "Ali_Kurban_CV.pdf"); // optional custom name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return (
    <Box
      w="full"
      bgGradient="linear(to-b, #0D0D0D, #1A1A1A, #0D0D0D)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      py={5}
    >
      <Container maxW="3xl" centerContent>
        <VStack  textAlign="center" w="full">
          <Box w="full" display="flex" alignItems="center" justifyContent="center">
            <Box
              h={{ base: "320px", sm: "380px" }}
              w={{ base: "320px", sm: "380px" }}
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="blackAlpha.400"
              backdropFilter="blur(8px)"
              overflow="hidden"
              position="relative"
            >
              <chakra.video
                src="/ali_kur.mp4"        
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video-poster.jpg"  
                position="absolute"
                inset="0"
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />
            </Box>
          </Box>

          {/* Text Content */}
          <VStack  align="center">
                <Box bg="gray.800" opacity={10} p={8} borderRadius="lg" shadow="xl">
                  <TypewriterPosition />
                </Box>

            <MotionHeading
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              size={{ base: "2xl", sm: "3xl" }}
              fontWeight="semibold"
              lineHeight="shorter"
              color="text"
            >
              Alex Corbin
            </MotionHeading>

            <MotionText
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              fontSize={{ base: "md", sm: "lg" }}
              maxW="xl"
              color="text"
            >
              Building intelligent systems that solve real problems.
            </MotionText>

            {/* Action Buttons */}
            <MotionVStack
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              mt={2}
            >
              <HStack >
                <Button
                  onClick={scrollToAbout}
                  bg="accent1"
                  color="bg"
                  fontWeight="bold"
                  borderRadius="xl"
                  px={4}
                  py={2}
                  _hover={{
                    bg: "linkHover",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(166, 5, 5, 0.93)",
                  }}
                  transition="all 0.2s"
                >
                  ⬇️ More About Me
                </Button>

                <Button
                  onClick={downloadCV}
                  variant="outline"
                  borderColor="whiteAlpha.200"
                  color="text"
                  borderRadius="xl"
                  px={4}
                  py={2}
                  _hover={{
                    borderColor: "accent1",
                    color: "accent1",
                    boxShadow: "0 4px 12px rgba(255, 0, 153, 0.2)",
                  }}
                  transition="all 0.2s"
                >
                  Download CV
                </Button>
              </HStack>
            </MotionVStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
