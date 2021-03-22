import { Box, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import EmailNumberHeading from '../EmailNumberHeading';

function SalesEmailTwo({
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
          I run a freelance design and development studio in Auckland and would
          love to chat about how we can make sure the{' '}
          <Text as="span" display="inline" color="purple.500" fontWeight="500">
            {companyName}
          </Text>{' '}
          website is putting its best foot forward.
        </Text>

        <Text>
          (ANALYSIS OF EXISTING WEBSITE). Industry resources such as the
          <Link
            color="blue.500"
            href="https://developers.google.com/web/fundamentals/design-and-ux/principles"
          >
            {' '}
            Google Developer Program
          </Link>{' '}
          and the{' '}
          <Link
            color="blue.500"
            href="https://blog.hubspot.com/blog/tabid/6307/bid/30557/6-guidelines-for-exceptional-website-design-and-usability.aspx"
          >
            Hubspot Blog
          </Link>{' '}
          show how crucial a modern and mobile friendly website are to helping
          your business succeed.
        </Text>

        <Text>
          I'd appreciate you putting me in touch with the right person to talk
          about building a customised solution for your specific business needs.
        </Text>

        <Text>{signoff}</Text>
        <Text>- - -</Text>
        <Text>Jason Crabtree</Text>
      </VStack>
    </VStack>
  );
}

export default SalesEmailTwo;
