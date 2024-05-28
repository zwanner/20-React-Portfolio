import { Box, Heading, Text, Button, ButtonGroup, Link } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box textAlign="center" mt={10}>
            <Box textAlign="center" mt={10}>
                <Heading>Owen van der Zwan</Heading>
                <Text mt={4}>I am a 22 year old developer with a passion in front end!</Text>
                <ButtonGroup mt={6} spacing={4}>
                    <Button colorScheme="purple"><Link href="/portfolio">Portfolio</Link></Button>
                    <Button colorScheme="purple"><Link href="/contact">Contact</Link></Button>
                    <Button colorScheme="purple"><Link href="https://docs.google.com/document/d/1JTE1TxCv89EC18oCHYOHvzctHqzwTf3rz4fmyT_Ir6s/edit?usp=sharing">Resume</Link></Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
}