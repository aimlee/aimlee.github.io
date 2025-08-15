"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import Header from "@/components/layout/Header";

export default function Research() {
  const researchProjects = [
    {
      period: "2024",
      title: "MAMBA STOCK",
      institution: "Australian Institute of Machine Learning",
      location: "Adelaide, Australia",
      duration: "May 2024 - October 2024",
      supervisor: "Dr. Jinan Zou",
      summary: "Novel stock prediction using State Space models",
      details: [
        "Introduced MAMBAStock, a novel approach based on the recently proposed Selective State Space (S6) model, MAMBA",
        "Designed system to swiftly capture stock features and predict prices with competitive accuracy",
        "Collaborated under supervision of Dr. Jinan Zou from Australian Institute of Machine Learning",
        "Implemented cutting-edge deep learning architecture for financial time series prediction",
        "Achieved competitive performance in stock price prediction benchmarks"
      ],
      technologies: ["MAMBA", "State Space Models", "Time Series Analysis", "Financial ML", "Deep Learning", "Python", "PyTorch"],
      type: "Quantitative Finance Research"
    },
    {
      period: "2023",
      title: "Debiasing Hospital Reviews",
      institution: "Australian Institute of Machine Learning",
      location: "Adelaide, Australia", 
      duration: "January 2023 - December 2023",
      supervisor: "Dr. Weitong Chen",
      summary: "Gender bias mitigation in NLP systems",
      details: [
        "Initiated and led a groundbreaking research project targeting the pervasive issue of gender bias within NLP algorithms",
        "Collaborated with Dr. Weitong Chen to identify, analyze, and mitigate gender bias in NLP systems",
        "Developed methodologies for detecting implicit gender bias in hospital review sentiment analysis",
        "Implemented debiasing techniques to improve fairness in automated text analysis systems",
        "Contributed to advancing ethical AI practices in healthcare-related natural language processing"
      ],
      technologies: ["NLP", "Bias Detection", "Fairness in AI", "Sentiment Analysis", "BERT", "Transformers", "Python", "Ethical AI"],
      type: "NLP & Fairness Research"
    }
  ];

  return (
    <Box>
      <Header />
      <Box
        as="section"
        id="research"
        py={{ base: 16, md: 24 }}
        px={{ base: 6, md: 8 }}
        scrollMarginTop="80px"
      >
        
        <VStack w="full" align="flex-start" textAlign="left" gap={8}>
          <VStack align="flex-start" gap={2}>
            <Heading size="xl" color="accent1">
              Academic Research
            </Heading>
            <Box h="1px" bg="accent1" w="60px" />
            <Text color="gray.400" fontSize="md" maxW="2xl">
              Research projects conducted during my Master&apos;s program, focusing on cutting-edge machine learning applications and ethical AI development.
            </Text>
          </VStack>

          <VStack w="full" align="flex-start" gap={8}>
            {researchProjects.map((project, index) => (
              <Box key={index} w="full">
                <VStack align="flex-start" gap={4} w="full">
                  {/* Header */}
                  <VStack align="flex-start" gap={2} w="full">
                    <HStack w="full" justify="space-between" align="flex-start" flexWrap="wrap">
                      <VStack align="flex-start" gap={1}>
                        <Text fontSize="xl" fontWeight="bold" color="text">
                          <Text as="span" color="accent1">{project.period}:</Text> {project.title}
                        </Text>
                        <Text color="text" fontSize="md" fontWeight="medium">
                          {project.institution}
                        </Text>
                        <Text color="text" fontSize="sm">
                          {project.location} • {project.duration}
                        </Text>
                        <Text color="text" fontSize="sm">
                          Supervised by: {project.supervisor}
                        </Text>
                      </VStack>
                      <Badge 
                        bg="purple.600" 
                        color="white" 
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="md"
                      >
                        {project.type}
                      </Badge>
                    </HStack>
                  </VStack>

                  {/* Technologies */}
                  <VStack align="flex-start" gap={2} w="full">
                    <Text fontSize="sm" fontWeight="semibold" color="text">
                      Technologies & Methods:
                    </Text>
                    <HStack flexWrap="wrap" gap={2}>
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} size="sm" bg="accent1" color="text" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>

                  {/* Research Summary */}
                  <Box w="full">
                    <Text fontSize="sm" fontWeight="semibold" color="text" mb={2}>
                      Research Overview:
                    </Text>
                    <Text fontSize="sm" color="text" lineHeight="1.6" fontStyle="italic" pl={4} borderColor="accent1">
                      {project.summary}
                    </Text>
                  </Box>

                  {/* Detailed Contributions */}
                  <Box w="full">
                    <Text fontSize="sm" fontWeight="semibold" color="text" mb={2}>
                      Key Contributions:
                    </Text>
                    <Box pl={4}>
                      <VStack align="flex-start" gap={2}>
                        {project.details.map((detail, detailIndex) => (
                          <Text key={detailIndex} fontSize="sm" lineHeight="1.6" color="text">
                            • {detail}
                          </Text>
                        ))}
                      </VStack>
                    </Box>
                  </Box>
                </VStack>

                {index < researchProjects.length - 1 && (
                  <Box mt={8} h="1px" bg="gray.700" w="full" />
                )}
              </Box>
            ))}
          </VStack>

          {/* Research Impact Section */}
          <Box w="full" mt={6}>
            <VStack align="flex-start" gap={3} p={6} bg="gray.800" borderRadius="lg" border="1px solid" borderColor="gray.700">
              <Text fontSize="lg" fontWeight="bold" color="accent1">
                Research Impact
              </Text>
              <VStack align="flex-start" gap={2}>
                <Text fontSize="sm" color="gray.300">
                  • Advanced state-of-the-art techniques in financial ML and ethical NLP
                </Text>
                <Text fontSize="sm" color="gray.300">
                  • Contributed to fairness and bias mitigation in AI systems
                </Text>
                <Text fontSize="sm" color="gray.300">
                  • Published work under supervision of leading researchers in the field
                </Text>
                <Text fontSize="sm" color="gray.300">
                  • Bridged gap between theoretical research and practical applications
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
        </Box>
      </Box>
  );
}