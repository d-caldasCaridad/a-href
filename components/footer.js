import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">      
      <a href='https://d-caldascaridad.github.io/wd-p/' target='_blank'>&copy; {new Date().getFullYear()} { " " }De Caldas. All Rights Reserved.</a>
    </Box>
  )
}

export default Footer
