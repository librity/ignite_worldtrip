import React from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/react'

import { ContentContainer } from '../ContentContainer'

const Banner = () => {
  return (
    <Flex
      w="100%"
      h={['150px', '250px', '335px']}
      bgGradient="linear(to-t, #072E4B, #01162B)"
      color="gray.50"
      justify="center"
    >
      <ContentContainer>
        <Flex
          w="100%"
          justify="space-between"
          align="center"
          position="relative"
          zIndex={1}
        >
          <Flex flexDir="column" justify="center">
            <Text fontSize={['1.5rem', '2.25rem']} fontWeight="medium">
              5 Continents,
              <Text>infinite possibilities...</Text>
            </Text>
            <Text
              fontSize={['0.75rem', '1.25rem']}
              maxWidth="525px"
              mt="1.25rem"
            >
              Now's the time to embark on the journey of your dreams.
            </Text>
          </Flex>

          <Image
            src="/vectors/airplane.svg"
            position="absolute"
            right="0"
            mt="6rem"
            width={['100%', '100%', '100%', '40%', '']}
            display={['none', 'none', 'none', 'inline']}
          ></Image>
        </Flex>
      </ContentContainer>

      <Box
        w="100%"
        h={['150px', '250px', '335px']}
        position="absolute"
        backgroundImage="url('/images/stars.png')"
        backgroundPosition="top center"
        backgroundRepeat="repeat"
      />
    </Flex>
  )
}

export default Banner
