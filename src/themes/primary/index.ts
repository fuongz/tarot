import { createTheme, MantineColorsTuple } from '@mantine/core'

const enma: MantineColorsTuple = ['#f7ecff', '#e7d6fb', '#caaaf1', '#ac7ce8', '#9354e0', '#833bdb', '#7b2eda', '#6921c2', '#5d1cae', '#501599']

export const theme = createTheme({
  primaryColor: 'enma',
  fontFamily: '"Montserrat Alternates", serif',
  colors: {
    enma,
  },
})
