"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const skills = [
  "Python", "JavaScript", "TypeScript", "C++", "Java", "Go","React.js", "Node.js", "Django", "FastAPI", "REST APIs", "GraphQL", "Java SpringBoot", "Express.js", "Next.js", "WebSocket",
  "PostgreSQL", "MongoDB", "SQL", "MySQL", "Microsoft SQL Server", "Redis", "Elasticsearch", 
  "Azure Cloud", "AWS EC2", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Kafka", "Apache Spark", "Windows Server", "Linux", "Nginx",
  "PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "BERT", "GPT", "Hugging Face", "XGBoost", "LightGBM", "Computer Vision", "NLP", "Neural Networks", "CNNs", "RNNs",
  "Transfer Learning", "NumPy", "Pandas", "Data Analysis", "Research Methodology", "Statistical Analysis", "Feature Engineering", "Data Visualization", "Matplotlib", "Seaborn",
  "Jupyter", "MLflow", "Apache Airflow",
  "Git", "GitHub", "GitLab","Agile/Scrum", "Test-Driven Development (TDD)", "Microservices Architecture", "API Design", "System Design", "Performance Optimization"
];

export default function QuickAbout() {

  return (
    <Box
      as="section"
      id="about"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 8 }}
      scrollMarginTop="80px"
    >
      <VStack
        maxW="4xl"
        mx="auto"
        align="flex-start"
        textAlign="left"
      >
        {/* Main Heading */}
        <Heading size="2xl" color="text">
          About
        </Heading>
        <Box h="1px" bg="accent1" w="60px" />
        {/* Brief Description */}
        <Text 
          color="text" 
          fontSize={{ base: "lg", md: "xl" }} 
          maxW="3xl"
          lineHeight="tall"
        >
          Results-driven Software Engineer with experienced in solving complex technical challenges,
          optimizing system performance, and building fault-tolerant distributed systems.
          Proven track record of analyzing large-scale infrastructure issues, implementing automated solutions,
          and improving operational efficiency while mastering cutting-edge technologies. Seeking to leverage
          analytical expertise, coding proficiency, and systems thinking to tackle the unique reliability challenges.

        </Text>

        {/* Education */}
        <VStack
          w="full"
          align="flex-start"
          textAlign="left"
        >
          <Heading size="xl" color="accent1">
            Education
          </Heading>
          <Box h="1px" bg="accent1" w="60px" />
          <VStack
            maxW="3xl"
            align="flex-start"
            textAlign="left"
          >
            <Box>
              <Text fontSize="lg" fontWeight="semibold" color="text">
                University of Adelaide
              </Text>
              <Text color="gray.400" fontSize="md">
                Master of AI/Machine Learning • Adelaide, Australia • 2022–2024
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="semibold" color="text">
                Kazakh-British Technical University
              </Text>
              <Text color="gray.400" fontSize="md">
                Bachelor of Computer Engineering & Computing Technologies • Almaty, Kazakhstan • 2017–2021
              </Text>
            </Box>
          </VStack>
        </VStack>

        {/* Experience Timeline */}
        <VStack
          w="full"
          align="flex-start"
          textAlign="left"
        >
          <Heading size="xl" color="accent1">
            Experience
          </Heading>
          <Box h="1px" bg="accent1" w="60px" />
          <VStack
            maxW="3xl"
            align="flex-start"
            textAlign="left"
          >
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2024–2025:</Text> CPO @ SPOTFAKE.AI
              </Text>
              <Text color="gray.400" fontSize="sm">
                Full Stack & ML pipelines
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2023–2024:</Text> Research/Teaching @ University of Adelaide
              </Text>
              <Text color="gray.400" fontSize="sm">
                Mentored 200+ students in CS/AI
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2022:</Text> Full-Stack @ GoCrowd.io
              </Text>
              <Text color="gray.400" fontSize="sm">
                Microservices at scale
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2021:</Text> Software Engineer @ ICBC
              </Text>
              <Text color="gray.400" fontSize="sm">
                Automation & internal systems
              </Text>
            </Box>
          </VStack>
        </VStack>

        {/* Skills */}
        <VStack
          w="full"
          align="flex-start"
          textAlign="left"
        >
          <Heading size="xl" color="accent1">
            Skills
          </Heading>
          <Box h="1px" bg="accent1" w="60px" />
          <HStack
            wrap="wrap"
            gap={3}
            justify="center"
            maxW="3xl"
          >
            {skills.map((skill) => (
              <Tag.Root
                key={skill}
                variant="outline"
                borderColor="gray.600"
                borderRadius="full"
                px="4"
                py="2"
                _hover={{ 
                  borderColor: "accent1", 
                  transform: "translateY(-2px)",
                  shadow: "md"
                }}
                transition="all 0.2s ease"
              >
                <Tag.Label color="text" fontWeight="medium">
                  {skill}
                </Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
        </VStack>
        <VStack
          w="full"
          align="flex-start"
          textAlign="left"
        >
          <Heading size="xl" color="accent1">
            Experience
          </Heading>
          <Box h="1px" bg="accent1" w="60px" />
          <VStack
            maxW="3xl"
            align="flex-start"
            textAlign="left"
          >
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2024–2025:</Text> CPO @ SPOTFAKE.AI
              </Text>
              <Text color="gray.400" fontSize="sm">
                Full Stack & ML pipelines
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2023–2024:</Text> Research/Teaching @ University of Adelaide
              </Text>
              <Text color="gray.400" fontSize="sm">
                Mentored 200+ students in CS/AI
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2022:</Text> Full-Stack @ GoCrowd.io
              </Text>
              <Text color="gray.400" fontSize="sm">
                Microservices at scale
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" color="text">
                <Text as="span" fontWeight="bold" color="accent1">2021:</Text> Software Engineer @ ICBC
              </Text>
              <Text color="gray.400" fontSize="sm">
                Automation & internal systems
              </Text>
            </Box>
          </VStack>
        </VStack>
        {/* Contact Links */}
        <VStack
          w="full"
          align="flex-start"
          textAlign="left"
        >
          <Heading size="xl" color="accent1">
            Connect
          </Heading>
          <Box h="1px" bg="accent1" w="60px" />
          <HStack>
            <ChakraLink asChild>
              <NextLink href="mailto:ali.kurbanuly@gmail.com">
                <IconButton 
                  aria-label="Email"
                  variant="outline"
                  borderColor="gray.600"
                  color="text"
                  _hover={{ 
                    borderColor: "accent1", 
                    color: "accent1",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.2s ease"
                >
                  <Mail size={20} />
                </IconButton>
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="https://linkedin.com/in/kurbana">
                <IconButton 
                  aria-label="LinkedIn"
                  variant="outline"
                  borderColor="gray.600"
                  color="text"
                  _hover={{ 
                    borderColor: "accent1", 
                    color: "accent1",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.2s ease"
                >
                  <Linkedin size={20} />
                </IconButton>
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="https://github.com/aimlee">
                <IconButton 
                  aria-label="GitHub"
                  variant="outline"
                  borderColor="gray.600"
                  color="text"
                  _hover={{ 
                    borderColor: "accent1", 
                    color: "accent1",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.2s ease"
                >
                  <Github size={20} />
                </IconButton>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="https://www.instagram.com/kurlyli">
                <IconButton 
                  aria-label="Instagram"
                  variant="outline"
                  borderColor="gray.600"
                  color="text"
                  _hover={{ 
                    borderColor: "accent1", 
                    color: "accent1",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.2s ease"
                >
                  <Instagram size={20} />
                </IconButton>
              </NextLink>
            </ChakraLink>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}