import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import EmailNumberHeading from '../EmailNumberHeading';

function SalesEmailSix({
  number,
  subjectLine,
  greeting,
  signoff,
  companyName,
}) {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const color = useColorModeValue('blue.900', 'blue.50');
  const yellowBg = useColorModeValue('yellow.50', 'yellow.700');

  const whiteBG = useColorModeValue('white', 'gray.800');

  return (
    <VStack spacing={6} align="stretch">
      <EmailNumberHeading number={number} />
      <Text
        fontWeight="600"
        bg={yellowBg}
        color={color}
        border="1px"
        borderColor={color}
        width="fit-content"
        p="2"
        py="1"
        borderRadius="md"
      >
        {subjectLine}
      </Text>
      <VStack
        boxShadow="base"
        spacing={2}
        bg={whiteBG}
        color={color}
        borderRadius="lg"
        p="8"
        align="stetch"
      >
        <Text>- - -</Text>
        <Text>{greeting}</Text>

        <Text>
          I run a website Design and Development Studio that works specifically
          with financial and professional services companies like{' '}
          <Text as="span" display="inline" color="purple.500" fontWeight="500">
            {companyName}
          </Text>
          . I can see that your existing website is looking great and has been
          recently worked on. As such, I'm contacting you to ask if you have
          plans for any other digital strategy projects in the next few months?
        </Text>

        <Text>
          These might include projects such as software integrations, using new
          software tools, increased web-app functionality, digital brand
          development projects or other similar projects?
        </Text>

        <Text>
          If so, I'd love to put forward a proposal of how I can help. I work
          with a focus on delivering business value — pairing design and
          development with strategy work, measurable performance improvements
          and long-term change.
        </Text>

        <Text>{signoff}</Text>
        <Text>- - -</Text>
        <Text>Jason Crabtree</Text>
      </VStack>
    </VStack>
  );
}

export default SalesEmailSix;
