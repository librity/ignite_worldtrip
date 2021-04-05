import { Divider, Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'

import Header from '../components/Header'
import SwiperDivider from '../components/SwiperDivider'

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
      <Flex
        w="100%"
        alignItems="center"
        direction="column"
        justifyContent="center"
      >
        <Header />

        <SwiperDivider />
      </Flex>
    </>
  )
}
