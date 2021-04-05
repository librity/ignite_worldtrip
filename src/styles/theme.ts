import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181b23',
      '800': '#1f2029',
      '700': '#353646',
      600: '#999999',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      50: '#F5F8FA',
    },
    blue: {
      800: '#47585B',
    },
    yellow: {
      500: '#ffba08',
    },
    primary: {
      '900': '#FFBA08',
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
