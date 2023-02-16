import { Heading, Center, Flex, Box, Stack, Text } from '@chakra-ui/react';

import { SignInAction, InitialsInput } from 'features/signin-with-initials';

export default function AuthPage() {
    // HACK this should be moved to a generic page HOC
    return (
        <Flex
            width="100vw"
            height="100vh"
            alignContent="center"
            justifyContent="center"
        >
            <Center>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight="110%"
                    >
                        Welcome to Naive
                    </Heading>

                    <Text color="gray.500">Sign In with your initials</Text>

                    <Stack
                        direction="column"
                        spacing={3}
                        align="center"
                        alignSelf="center"
                        position="relative"
                    >
                        <InitialsInput />

                        <SignInAction
                            colorScheme="green"
                            bg="green.400"
                            px={6}
                            _hover={{
                                bg: 'green.500',
                            }}
                        />
                    </Stack>
                </Stack>
            </Center>
        </Flex>
    );
}
