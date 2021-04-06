import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface SeeMoreProps {
  href: string
}

const SeeMore = ({ href }: SeeMoreProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        mt="2rem"
        mb="2rem"
        target="_blank"
        isExternal
        color="yellow.500"
      >
        More pictures...
        <ExternalLinkIcon mx="1px" />
      </ChakraLink>
    </Link>
  )
}

export default SeeMore
