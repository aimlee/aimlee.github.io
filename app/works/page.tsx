"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge
} from "@chakra-ui/react";
import Header from "@/components/layout/Header";


export default function WorkExperience() {
  const experiences = [
    {
      period: "2024–2025",
      title: "Chief Product Officer",
      company: "SPOTFAKE.AI",
      location: "Adelaide, Australia",
      duration: "June 2024 - May 2025",
      summary: "ML pipelines & product strategy",
      details: [
        "Designed and optimized end-to-end ML data pipelines for document fraud detection, improving model accuracy by 5% and reducing processing time by 10%",
        "Developed production-ready machine learning models using PyTorch and TensorFlow, integrating computer vision algorithms for real-time document analysis",
        "Led cross-functional analytics initiatives, translating business requirements into statistical models and delivering actionable insights to drive product strategy"
      ],
      technologies: ["PyTorch", "Django","React","TensorFlow", "Computer Vision", "ML Pipelines", "Product Strategy"]
    },
    {
      period: "2023–2024",
      title: "Research & Teaching Assistant - AI/ML",
      company: "The University of Adelaide",
      location: "Adelaide, Australia", 
      duration: "March 2023 - December 2024",
      summary: "Mentored 200+ students in CS/AI",
      details: [
        "Instructed and mentored 200+ students, improving their comprehension and performance in core concepts of Computer Science",
        "Led and guided a team of tutors, ensuring consistent and accurate grading of assignments and examinations"
      ],
      technologies: ["Teaching", "AI/ML", "Computer Science", "Team Leadership"]
    },
    {
      period: "2022",
      title: "Full-Stack Developer",
      company: "GoCrowd.io",
      location: "Astana, Kazakhstan",
      duration: "January 2022 - December 2022", 
      summary: "Microservices at scale",
      details: [
        "Architected and deployed scalable distributed system infrastructure from initial concept to production, designing resilient microservices architecture supporting thousands of concurrent users",
        "Led front-end engineering team of 2 developers, successfully delivering 5+ high-availability features with robust error handling and fault-tolerant design patterns",
        "Integrated multiple API services and implemented circuit breaker patterns to improve system interoperability and prevent cascading failures, resulting in 40% reduction in service degradation incidents",
        "Implemented comprehensive monitoring and testing protocols including automated health checks, performance benchmarking, and chaos engineering practices to ensure system reliability across distributed environments",
        "Utilized modern infrastructure stack including TypeScript, REST APIs, GitLab CI/CD, Docker containerization, and AWS cloud services to deliver highly scalable and maintainable distributed systems",
        "Collaborated in DevOps-focused agile environment, implementing infrastructure-as-code practices using GitLab pipelines and Docker/AWS for automated deployment and infrastructure management"
      ],
      technologies: ["React", "MobX","Redux", "React Hooks","TypeScript", "Microservices", "Docker", "AWS", "GitLab CI/CD"]
    },
    {
      period: "2021",
      title: "Software Engineer", 
      company: "Industrial and Commercial Bank of China",
      location: "Almaty, Kazakhstan",
      duration: "February 2021 - December 2021",
      summary: "Automation & internal systems",
      details: [
        "Demonstrated expertise in Java, Spring Boot, and Python, contributing to robust software development and system optimization",
        "Engineered an internal management system for a team of over 50 employees, streamlining operational efficiencies and communication",
        "Revolutionized the bank's daily reporting process, automating the workflow and achieving a 340 percent improvement in reporting accuracy and efficiency"
      ],
      technologies: ["Java", "Spring Boot", "Python", "Process Automation", "Internal Systems"]
    }
  ];

  return (
    <Box>
      <Header />
      <Box
        as="section"
        id="about"
        py={{ base: 16, md: 24 }}
        px={{ base: 6, md: 8 }}
        scrollMarginTop="80px"
      >
        
        <VStack w="full" align="flex-start" textAlign="left" gap={8}>
          <VStack align="flex-start" gap={2}>
            <Heading size="xl" color="accent1">
              Experience
            </Heading>
            <Box h="1px" bg="accent1" w="60px" />
          </VStack>

          <VStack w="full" align="flex-start" gap={6}>
            {experiences.map((exp, index) => (
              <Box key={index} w="full">
                <VStack align="flex-start" gap={3} w="full">
                  {/* Header */}
                  <HStack w="full" justify="space-between" align="flex-start" flexWrap="wrap">
                    <VStack align="flex-start" gap={1}>
                      <Text fontSize="xl" fontWeight="bold" color="text">
                        <Text as="span" color="accent1">{exp.period}:</Text> {exp.title} @ {exp.company}
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        {exp.location} • {exp.duration}
                      </Text>
                    </VStack>
                  </HStack>

                  {/* Technologies */}
                  <HStack flexWrap="wrap" gap={2}>
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} size="sm" bg="accent1" color="white" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </HStack>

                  {/* Details */}
                  <Box pl={4}>
                    <VStack align="flex-start" gap={2}>
                      {exp.details.map((detail, detailIndex) => (
                        <Text key={detailIndex} fontSize="sm" lineHeight="1.6" color="text">
                          • {detail}
                        </Text>
                      ))}
                    </VStack>
                  </Box>
                </VStack>

                {index < experiences.length - 1 && (
                  <Box mt={6} h="1px" bg="gray.700" w="full" />
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
        </Box>
      </Box>
  );
}