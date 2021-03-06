import {
  Box,
  Button,
  Divider,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SalesEmailEight from '../components/emails/SalesEmailEight';
import SalesEmailFive from '../components/emails/SalesEmailFive';
import SalesEmailFour from '../components/emails/SalesEmailFour';
import SalesEmailNine from '../components/emails/SalesEmailNine';
import SalesEmailOne from '../components/emails/SalesEmailOne';
import SalesEmailSeven from '../components/emails/SalesEmailSeven';
import SalesEmailSix from '../components/emails/SalesEmailSix';
import SalesEmailThree from '../components/emails/SalesEmailThree';
import SalesEmailTwo from '../components/emails/SalesEmailTwo';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [subjectLine, setSubjectLine] = useState('');
  const [greetingPlusName, setGreetingPlusName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [signoff, setSignoff] = useState('');

  function clearState() {
    setSubjectLine('');
    setGreetingPlusName('');
    setBusinessName('');
    setSignoff('');
  }

  const bg = useColorModeValue('gray.50', 'gray.700');
  const color = useColorModeValue('blue.900', 'blue.50');

  const whiteBG = useColorModeValue('white.50', 'gray.800');

  const actionText = useColorModeValue('gray.50', 'gray.900');
  const actionColor = useColorModeValue('blue.900', 'blue.50');

  return (
    <VStack
      m="auto"
      // p={{ sm: 6, md: 8, lg: 16 }}
      p={[5, 8, 16]}
      mb="40"
      spacing={6}
      align="stretch"
      bg={bg}
      color={color}
      shadow="md"
      borderRadius="md"
      maxWidth={[360, 640, 1480]}
    >
      <Wrap alignItems="center">
        <Heading
          as="h1"
          fontSize="3xl"
          textTransform="uppercase"
          color="green.500"
        >
          Sales Emails
        </Heading>
        <Spacer />
        <Button
          mb={4}
          mr={4}
          onClick={clearState}
          px="4"
          py="4"
          w="fit-content"
          bg={actionColor}
          color={actionText}
          size="sm"
          align="flex-end"
          alignSelf="center"
        >
          Clear Placeholders
        </Button>
        <Button
          onClick={toggleColorMode}
          px="4"
          py="4"
          justifyContent="center"
          w="fit-content"
          bg={actionColor}
          color={actionText}
          size="sm"
          align="flex-end"
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Wrap>

      <Wrap align="center" spacing={[2, 2, 16]}>
        <WrapItem>
          <Heading as="h2" size="md">
            Quickview Emails
          </Heading>
        </WrapItem>
        <WrapItem>
          <Button type="button" onClick={onOpen} colorScheme="green">
            Quick View Emails
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay />
            <ModalContent p={[2, 6, 12]} bg={bg} color={color} top={-6}>
              <ModalHeader>Sales Emails Lightbox</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>Four</Tab>
                    <Tab>Five</Tab>
                    <Tab>Six</Tab>
                    <Tab>Seven</Tab>
                    <Tab>Eight</Tab>
                    <Tab>Nine</Tab>
                  </TabList>
                  <Divider mt="2" />

                  <TabPanels p={2}>
                    <TabPanel>
                      <SalesEmailOne
                        number="One"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>

                    <TabPanel>
                      <SalesEmailTwo
                        number="Two"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>

                    <TabPanel>
                      <SalesEmailThree
                        number="Three"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                    <TabPanel>
                      <SalesEmailFour
                        number="Four"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                    <TabPanel>
                      <SalesEmailFive
                        number="Five"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                    <TabPanel>
                      <SalesEmailSix
                        number="Six"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                    <TabPanel>
                      <SalesEmailSeven
                        number="Seven"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                    <TabPanel>
                      <SalesEmailEight
                        number="Eight"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                    <TabPanel>
                      <SalesEmailNine
                        number="Nine"
                        subjectLine={subjectLine || 'SUBJECT LINE'}
                        greeting={greetingPlusName || 'HI PERSON'}
                        companyName={businessName || 'BUSINESS NAME'}
                        signoff={signoff || 'EMAIL SIGN OFF'}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </ModalBody>
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>

      <Divider />

      <Box>
        <Heading as="h2" size="md" mb="6">
          Email Placeholder Inputs
        </Heading>
        <SimpleGrid columns={2} spacing={2}>
          <FormLabel htmlFor="subjectLine">
            Subject Line{' '}
            <Text as="em" display="inline" color="gray.400">
              ~50ch
            </Text>
            <Input
              bg={whiteBG}
              color={color}
              mt="2"
              autoComplete="disable"
              type="text"
              name="subjectLine"
              value={subjectLine}
              onChange={(e) => setSubjectLine(e.target.value)}
            />
          </FormLabel>
          <FormLabel htmlFor="greeting">
            Email Greeting{' '}
            <Text as="em" display="inline" color="gray.400">
              e.g. HI PERSON
            </Text>
            <Input
              bg={whiteBG}
              color={color}
              mt="2"
              autoComplete="disable"
              type="text"
              name="greeting"
              value={greetingPlusName}
              onChange={(e) => setGreetingPlusName(e.target.value)}
            />
          </FormLabel>
          <FormLabel htmlFor="businessName">
            Business Name{' '}
            <Text as="em" display="inline" color="gray.400">
              BUSINESS NAME
            </Text>
            <Input
              bg={whiteBG}
              color={color}
              mt="2"
              autoComplete="off"
              type="text"
              name="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </FormLabel>
          <FormLabel htmlFor="signoff">
            Email Signoff{' '}
            <Text as="em" display="inline" color="gray.400">
              Warm regards,
            </Text>
            <Input
              bg={whiteBG}
              color={color}
              mt="2"
              autoComplete="disable"
              type="text"
              name="signoff"
              value={signoff}
              onChange={(e) => setSignoff(e.target.value)}
            />
          </FormLabel>
        </SimpleGrid>
      </Box>

      <Divider />

      <VStack align="stretch">
        <Heading as="h2" size="lg">
          Emails
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacingY="24"
          spacingX={{ sm: 4, lg: 6, xl: 12 }}
        >
          <SalesEmailOne
            number="One"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailTwo
            number="Two"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailThree
            number="Three"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailFour
            number="Four"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailFive
            number="Five"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailSix
            number="Six"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailSeven
            number="Seven"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailEight
            number="Eight"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
          <SalesEmailNine
            number="Nine"
            subjectLine={subjectLine || 'SUBJECT LINE'}
            greeting={greetingPlusName || 'HI PERSON'}
            companyName={businessName || 'BUSINESS NAME'}
            signoff={signoff || 'EMAIL SIGN OFF'}
          />
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
