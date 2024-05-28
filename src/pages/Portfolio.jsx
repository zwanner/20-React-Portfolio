import { SimpleGrid, Box, Heading, Text, Button, Card, CardHeader, CardBody, Link } from '@chakra-ui/react';

export default function Portfolio() {
    return (
        <Box p={4}>
            <Box mt={8}>
                <Heading size="xl">Owen van Der Zwan</Heading>
                <Text mt={4}>A young and motivated coder ready to break into the job market!</Text>
            </Box>
            <SimpleGrid columns={2} spacing={4} mt={8}>
                <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardHeader>
                        <Heading size="md">Gamer Slop</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text mt={2}>Gamer Slop is a web app that allows users to read, post, and discuss video games or game news.</Text>
                        <Button mt={4} colorScheme="purple"><Link href="https://github.com/zwanner/Gamer-Slop">Check it Out!</Link></Button>
                    </CardBody>
                </Card>
                <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardHeader>
                        <Heading size="md">SVG Generator</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text mt={2}>This project prompts the user with options to generate a simple SVG logo. It then creates the logo as logo.svg.</Text>
                        <Button mt={4} colorScheme="purple"><Link href="https://github.com/zwanner/10-SVG-Generator">Check it Out!</Link></Button>
                    </CardBody>
                </Card>
                <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardHeader>
                        <Heading size="md">Text Editor</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text mt={2}>A simple PWA text editor for your browser.</Text>
                        <Button mt={4} colorScheme="purple"><Link href="https://github.com/zwanner/19-Text-Editor">Check it Out!</Link></Button>
                    </CardBody>
                </Card>
                <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardHeader>
                        <Heading size="md">SQL Employee Tracker</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text mt={2}>A command line employee tracker using inquirer and SQL.</Text>
                        <Button mt={4} colorScheme="purple"><Link href="https://github.com/zwanner/12-SQL-Employee-Tracker">Check it Out!</Link></Button>
                    </CardBody>
                </Card>
                <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardHeader>
                        <Heading size="md">Social API</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text mt={2}>A backend API and mongoDB that stores users as well as their associated thoughts and reactions.</Text>
                        <Button mt={4} colorScheme="purple"><Link href="https://github.com/zwanner/18-Social-API">Check it Out!</Link></Button>
                    </CardBody>
                </Card>
                <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardHeader>
                        <Heading size="md">Volunteer Connect</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text mt={2}>A website which allows volunteer event organizers to connect with volunteers to launch volunteer events in any community.</Text>
                        <Button mt={4} colorScheme="purple"><Link href="https://github.com/zwanner/Community-Volunteer-Board">Check it Out!</Link></Button>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    );
}