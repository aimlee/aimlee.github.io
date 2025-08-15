"use client";
import { Card, CardHeader, CardBody, Heading, Text, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function WorkCard({
  title,
  oneLiner,
  href
}: {
  title: string;
  oneLiner: string;
  href: string;
}) {
  return (<>asdf</>
    // <Card _hover={{ transform: "translateY(-3px)" }} transition="all .2s ease">
    //   <CardHeader><Heading size="md">{title}</Heading></CardHeader>
    //   <CardBody>
    //     <Stack gap={3}>
    //       <Text>{oneLiner}</Text>
    //       <Button as={Link} href={href} size="sm" variant="outline">Learn more</Button>
    //     </Stack>
    //   </CardBody>
    // </Card>
  );
}
