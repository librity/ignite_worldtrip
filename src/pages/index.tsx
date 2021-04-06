import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import continents from '../data/continents'

import Header from '../components/Header'
import Banner from '../components/Banner'
import TravelTypes from '../components/TravelTypes'
import SwiperDivider from '../components/SwiperDivider'
import Carousel from '../components/Carousel'

interface Continent {
  id: string
  name: string
  title: string
  background: string
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
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
        <Header />

        <Banner />

        <TravelTypes />

        <SwiperDivider />
        <Carousel continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map(continent => ({
        id: continent.id,
        name: continent.name,
        title: continent.carouselTitle,
        background: continent.carouselBackground,
      })),
    },
  }
}
