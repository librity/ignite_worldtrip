import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      600: '#999999',
      50: '#F5F8FA',
    },
    blue: {
      800: '#47585B',
    },
    yellow: {
      500: '#ffba08',
    },
    primary: {
      900: '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'blue.800',
      },
    },
  },
})

const overrides = extendTheme({
  styles: {
    global: props => ({
      '.swiper-container': {
        width: '300px',
      },
    }),
  },
})
