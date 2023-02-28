import {
    Box,
    Heading,
    Text,
    Stack,
    Card,
    SimpleGrid,
    CardHeader,
    CardFooter,
    CardBody,
    VStack,
    Image,
    Flex,
    Spacer,
    StackDivider,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    HStack,
    useToast,
  } from '@chakra-ui/react';

  import { Component } from 'react';

  export function Home() {
    return (
      <VStack align="left">
        <Flex>
          <Heading size="md"> Home </Heading>
          <Spacer />
          <Heading size="md"> Project #3456 </Heading>
          <Spacer />
          <Heading size="md"> John Smith </Heading>
        </Flex>
        <SimpleGrid columns={4} spacing="100px">
          <Card align="center">
            <CardHeader>
              <Heading size="md">Threats</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="4xl">60</Text>
            </CardBody>
          </Card>
          <Card align="center">
            <CardHeader>
              <Heading size="md"> Vulnerabilities</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="4xl"> 16 </Text>
            </CardBody>
          </Card>
          <Card align="center">
            <CardHeader>
              <Heading size="md"> Nodes</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="4xl"> 43 </Text>
            </CardBody>
          </Card>
          <Card align="center">
            <CardHeader>
              <Heading size="md"> IP Addresses</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="4xl"> 64 </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
        <Card>
          <CardBody>
            <Heading>View Maps</Heading>
            <SimpleGrid columns={4} spacing="100px">
              <Card>
                <CardHeader>
                  <Heading size="md"> Network Map</Heading>
                </CardHeader>
                <CardBody>
                  <Image src="mapPic.jpg" />
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"> TAK Map </Heading>
                </CardHeader>
                <CardBody>
                  <Image src="takM.png" />
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"> Pivot Map</Heading>
                </CardHeader>
                <CardBody>
                  <Image src="pivotMap.png" />
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Packages Received
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        426
                      </Text>
                    </Box>
                    <Box >
                      <Heading size="xs" textTransform="uppercase">
                        Average first response time
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        33m
                      </Text>
                    </Box>
                    <Box >
                      <Heading size="xs" textTransform="uppercase">
                        Average response time 
                      </Heading>
                      <Text pt="2" fontSize="sm">
                      3h 8m
                      </Text>
                    </Box>
  
                  </Stack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </CardBody>
        </Card>
        <SimpleGrid columns={2} spacing="10px">
          <Card>
            <CardHeader>
              <Box>
                <Heading size="md">Network Statistics</Heading>
              </Box>
              <Box>
                <Text size="md">View Details</Text>
              </Box>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    NS2Num3
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    A500N
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    A01N
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Pending
                  </Heading>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Box>
                <Heading size="md">Network Statistics</Heading>
              </Box>
              <Box>
                <Text size="md">View Details</Text>
              </Box>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    NS2Num3
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    A500N
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    A01N
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Pending
                  </Heading>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
        </VStack>
  );
}
