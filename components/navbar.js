import {
  Container,
  Box,
  Stack,

  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'


const Navbar = props => {
  const {  } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Heading as="h1" variant="title">
            Solidaria
          </Heading>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 1, md: 0 }}
        >          
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
