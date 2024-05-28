import { Box, Heading, Text } from '@chakra-ui/react';

const Error = () => {
    return (
        <Box textAlign="center" mt={10}>
            <Heading as="h1" size="xl" mb={4}>
                Oops! Something went wrong.
            </Heading>
            <Text fontSize="lg" mb={4}>
                We apologize for the inconvenience. Please try again later.
            </Text>
            {/* Add additional error handling or custom components here */}
        </Box>
    );
};

export default Error;
