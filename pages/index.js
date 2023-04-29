import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        ¡Hola! Saludos desde Antioquia Colombia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Angeliana Alvarez Piedrahita
          </Heading>
          <Paragraph>Innovaci&oacute;n + Transformaci&oacute;n Digital</Paragraph>
          <Heading as="h6" variant="caption">
          Extensionista tecnológica en el Servicio Nacional de Aprendizaje (SENA)
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
            borderWidth={2}
            borderStyle="solid"
            w="auto"
            h="auto"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="https://media.licdn.com/dms/image/C4E03AQGyNDaHJFIcNw/profile-displayphoto-shrink_800_800/0/1542809548403?e=1687996800&v=beta&t=ORvfbrrrUNxQPQpYcOM-_mgEyhSyhQzrGU_17vSWsCc"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Angeliana es especialista en &aacute;reas de mercadeo, documentaci&oacute;n de procesos, administraci&oacute;n, estad&iacute;stica, emprendimiento, consultor&iacute;a fortalecimiento empresarial y asesor&iacute;a en gesti&oacute;n emocional para emprendedores. Con su s&oacute;lido conocimiento te&oacute;rico y experiencia, junto con su orientaci&oacute;n al logro y los resultados, ella puede aportar significativamente a cualquier empresa. Angeliana es una profesional comprometida con el &eacute;xito de su equipo y de la empresa en la que trabaja.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2013</BioYear>          
        </BioSection>
          <Paragraph>
          Angeliana Alvarez fue una coordinadora de proyectos de emprendimiento en el programa EMFORMA durante seis a&ntilde;os, dirigi&oacute; a emprendedores y nuevos empresarios en el &aacute;rea de Aburr&aacute; Sur. Con una amplia experiencia en el fortalecimiento empresarial, Angeliana lidera y coordina proyectos para brindar a los emprendedores las herramientas necesarias para el &eacute;xito de sus proyectos empresariales. Como gestora de emprendimiento, Angeliana es una l&iacute;der apasionada que trabaja incansablemente para ayudar a los emprendedores a alcanzar sus objetivos, y as&iacute; contribuir al desarrollo econ&oacute;mico de la regi&oacute;n. Su compromiso y dedicaci&oacute;n son evidentes en la eficacia y eficiencia de los proyectos que lidera, logrando impactar positivamente la vida de muchos emprendedores.
          </Paragraph>

          <br />

        <BioSection>
          <BioYear>2020</BioYear>
        </BioSection>        
          <Paragraph>
          Angeliana Alvarez es una consultora empresarial con experiencia en mejorar la transformaci&oacute;n digital, productividad, competitividad y rentabilidad de empresas. Su habilidad para liderar y trabajar en equipo, escuchar y ser solidaria, demuestra su capacidad para adaptarse a cada empresa y brindar soluciones personalizadas. Su capacidad de iniciativa y liderazgo hacen que sea una figura importante en el &eacute;xito de cualquier proyecto empresarial en el que se involucre. Los testimonios de sus clientes son una clara evidencia de la calidad de su trabajo y el impacto positivo que genera.
          </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        &#128151;
        </Heading>
        <Heading as="h6" variant="caption">
        Causas ben&eacute;ficas
        </Heading>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Follow me on Twitter
        </Heading>
        <List>
          
          <ListItem>
            <Link href="https://twitter.com/AngelianaAP" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @AngelianaAP
              </Button>
            </Link>
          </ListItem>          
        </List>
          <Heading as="h3" variant="section-title">
            Contact me
          </Heading>
          <Box align="lefht" my={4}>
          <Button
            rightIcon={<IoLogoLinkedin />}
            colorScheme="teal"
            onClick={() => window.open("https://www.linkedin.com/in/angeliana-alvarez-piedrahita-24095129/", "_blank")}
            >
            LinkedIn
          </Button>
          </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'
