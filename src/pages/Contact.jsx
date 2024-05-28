import { Card, CardBody, CardHeader, Badge, VStack, Text } from '@chakra-ui/react';

const Contact = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <CardBody p="6">
                    <CardHeader justifyContent="space-between" alignItems="center">
                        <Text fontWeight="bold" fontSize="xl">
                            Owen van der Zwan
                        </Text>
                        <Badge colorScheme="green">Online</Badge>
                    </CardHeader>

                    <VStack mt="4" spacing="2">
                        <Text>Email: owenvanderzwan@gmail.com</Text>
                        <Text>Phone: +1 610-680-5295</Text>
                    </VStack>
                </CardBody>
            </Card>
        </div>
    );
};

export default Contact;
