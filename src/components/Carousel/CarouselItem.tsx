import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface CarouselItemProps {
  id: string
  name: string
  title: string
  background: string
}

export default function CarouselItem({
  id,
  name,
  title,
  background,
}: CarouselItemProps) {
  return (
    <Link href={`continent/${id}`}>
      <Flex
        backgroundImage={`url(${background})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        w="100%"
        h={['250px', '450px']}
        borderRadius="50px"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          w="100%"
        >
          <Text fontWeight="600" fontSize={['24px', '48px']} color="white">
            {name}
          </Text>
          <Text fontWeight="500" fontSize={['14px', '24px']} color="white">
            {title}
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}
