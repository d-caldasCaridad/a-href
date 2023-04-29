import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#c1c2c3', '#7f1e25')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 23,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      "caption": {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 4
      },
      "title": {
        fontSize: 23,
        marginTop: 3,
        marginBottom: 4,
        marginLeft: 3,
        marginRight: 7
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ffff00')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
