import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

import ContentContainer from '../../ContentContainer'

interface ContinentBannerProps {
  image: string
  name: string
}

const ContinentBanner = ({ image, name }: ContinentBannerProps) => {
  return (
    <Flex
      width="100%"
      height={['150px', '335px', '500px']}
      flexDir="column"
      align="center"
      backgroundImage={`url('${image}')`}
      backgroundSize="cover"
    >
      <ContentContainer
        mb={['0', '0', '3rem']}
        align={['center', 'center', 'flex-end']}
        justify={['center', 'center', 'flex-start']}
        height="100%"
      >
        <Heading color="gray.50">{name}</Heading>
      </ContentContainer>
    </Flex>
  )
}

export default ContinentBanner
