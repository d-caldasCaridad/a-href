import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <a href='https://deCaldas.github.io/home/'>&copy; {new Date().getFullYear()} {" "}Diego Whiskey. All Rights Reserved.</a>
    </Box>
  )
}

export default Footer
