import { useEffect, useState } from 'react'
import Router from 'next/router'

import { Heading, Center, Box, Text, Flex, Button } from '@chakra-ui/react'
import { useQuery } from "@apollo/client"
import { Header } from '../components/Header'
import Link from 'next/link'
import { LOAD_INFO } from '../GraphQL/queries'
import { Footer } from '../components/Footer'




export default function Home() {
 
  const {error, loading, data} = useQuery(LOAD_INFO)

  const [business, setBusiness] = useState([])

  const [rocket, setRocket] = useState([])

  useEffect(() => {
    if(data){
      setBusiness(data.company)
      setRocket(data.rockets)
    }
  },[data])

  function handleRedirectToSearch() {
    Router.push('/search')
  }

  function handleRedirectToAbout() {
    Router.push('/about')
  }


  return (
    <>
      <Header />
     
      <Center>
        <Flex flexDirection="column" ms={4} w="60%">
          <Box borderRadius={8} bg='purple.50' mt={8} p={4}>
            <Heading>Saiba mais sobre a {data.company.name}</Heading>
            <Box mt={10}>
              <Text>
                {data.company.ceo} é o CEO da {data.company.name}. A empresa foi fundada em {data.company.founded}.
              </Text>
              <Text>
                Para saber mais sobre a empresa...
              </Text>
              <Center mt={4}>
                <Button colorScheme='red' onClick={handleRedirectToAbout}>Saiba mais</Button>
              </Center>
            </Box>
          </Box>

          <Box borderRadius={8} bg='purple.50' mt={8} p={4}>
            <Heading>Quer conhecer os Foguetes da SpaceX?</Heading>
            <Box mt={10}>
              <Text>
                Para saber mais informações e detalhes sobre qualquer foguete clique abaixo:
              </Text>
              <Center mt={4}>
                <Button colorScheme='red' onClick={handleRedirectToSearch}>Busque Foguetes</Button>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Center> 

      <Flex >
        <Box             
          pos="fixed"
          right={6}
          bottom={14}
        >
          <Link 
            href='/about'>Sobre</Link>
        </Box>
      </Flex>

      <Footer />
    </>
  )
}
