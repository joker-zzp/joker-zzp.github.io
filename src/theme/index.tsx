import { createTheme } from '@mantine/core';

export const defaultTheme = createTheme({
  primaryColor: 'blue',
  primaryShade: 6,
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    },
  },
})

export const themeList = [
  {
    key: 'default'
  }
]
