import React, { ReactNode } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'

interface ContentContainerProps extends FlexProps {
  children: ReactNode
}

const ContentContainer = ({ children, ...rest }: ContentContainerProps) => {
  return (
    <Flex w="90%" maxWidth="1240px" align="center" {...rest}>
      {children}
    </Flex>
  )
}

export default ContentContainer
