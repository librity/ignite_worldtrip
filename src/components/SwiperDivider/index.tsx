import { Divider, Heading } from '@chakra-ui/react'

const SwiperDivider = () => {
  return (
    <>
      <Divider
        as="hr"
        w="20%"
        borderWidth="2px"
        borderColor="gray.500"
        bg="gray.500"
      />
      <Heading
        w="100%"
        textAlign="center"
        mt={['8', '16']}
        mb={['4', '8']}
        fontSize={['20px', '36px']}
        color="gray.700"
        fontWeight="500"
      >
        Choose a continent whenever you're ready!
      </Heading>
    </>
  )
}

export default SwiperDivider
