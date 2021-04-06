import React from 'react'

import ContentContainer from '../ContentContainer'
import TravelType from '../TravelType'

const TravelTypes = () => {
  return (
    <ContentContainer
      mt="6rem"
      flexWrap={['wrap', 'wrap', 'nowrap']}
      justify={['center', 'center', 'space-between']}
      align="center"
    >
      <TravelType imageSrc="/vectors/cocktail.svg" title="Night life" />
      <TravelType imageSrc="/vectors/surf.svg" title="Beach" />
      <TravelType imageSrc="/vectors/building.svg" title="Modern" />
      <TravelType imageSrc="/vectors/museum.svg" title="Classical" />
      <TravelType imageSrc="/vectors/earth.svg" title="and much more..." />
    </ContentContainer>
  )
}

export default TravelTypes
