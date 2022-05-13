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


  return (
    <>
      <Header />

      <Box>
        {rocket.map((val)=> {
          return(
            <Text>{val.name}</Text>
          )
        })}
      </Box>

{/*       
      <Center>
        <Flex flexDirection="column" ms={4} w="60%">
          <Box borderRadius={8} bg='purple.50' mt={8} p={4}>
            <Heading>Saiba mais sobre a SpaceX</Heading>
            <Box mt={10}>
              <Text>
                MUSK é o CEO da SpaceX. A empresa foi fundada em XXXX.
              </Text>
              <Text>
                Para saber mais sobre a empresa... <Link href='/about'>clique aqui</Link>!
              </Text>
            </Box>
          </Box>

          <Box borderRadius={8} bg='purple.50' mt={8} p={4}>
            <Heading>Quer conhecer os Foguetes da SpaceX?</Heading>
            <Box mt={10}>
              <Text>
                Para saber mais informações e detalhes sobre qualquer foguete clique abaixo:
              </Text>
              <Center mt={4}>
                <Button colorScheme='red' onClick={handleRedirectToSearch}>Search Rockets</Button>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Center> */}

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
