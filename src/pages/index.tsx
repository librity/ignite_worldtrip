import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
        <meta
          name="description"
          content="Browse the World's most-visited cities and plan your next trip abroad!"
        ></meta>
      </Head>
      <Flex width="100%" flexDir="column" bg="gray.50" align="center">
        <h1> Welcome to WorldTrip!</h1>
      </Flex>
    </>
  )
}
