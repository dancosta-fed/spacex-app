import { useQuery } from "@apollo/client";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LOAD_INFO } from "../Services/GraphQL/queries";

export default function Home() {
 
  const { loading, data } = useQuery(LOAD_INFO)



  if(loading) {
    return(
      <>
        <Header />
        <Center>
          <Flex flexDirection="column" ms={4} w="60%">
            <Box borderRadius={8} bg='purple.50' mt={8} p={4}>
              <Heading>Só um minutinho...</Heading>
              <Box mt={10}>
                <Text>
                  Carregando..
                </Text>
              </Box>
            </Box>
          </Flex>
        </Center>
      </>
    )
  }

  
  if(data){
    const {ceo, name, founded} = data.company

  return (
    <>
      <Header />
      <Center>
        <Flex flexDirection="column" ms={4} w="60%">
          <Box borderRadius={8} bg="purple.50" mt={8} p={4}>
            <Heading>Saiba mais sobre a SpaceX</Heading>
            <Box mt={10}>
              <Text>
                {ceo} é o CEO da {name}. A empresa foi fundada em {founded}.
              </Text>
              <Text>
                Para saber mais sobre a empresa...
              </Text>
              <Text>Para saber mais sobre a empresa...</Text>
              <Center mt={4}>
                <Button colorScheme='red' onClick={() => Router.push('/about')}>Saiba mais</Button>
              </Center>
            </Box>
          </Box>

          <Box borderRadius={8} bg="purple.50" mt={8} p={4}>
            <Heading>Quer conhecer os Foguetes da SpaceX?</Heading>
            <Box mt={10}>
              <Text>
                Para saber mais informações e detalhes sobre qualquer foguete
                clique abaixo:
              </Text>
              <Center mt={4}>
                <Button colorScheme='red' onClick={() => Router.push('/search')}>Busque Foguetes</Button>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Center>

      <Flex>
        <Box pos="fixed" right={6} bottom={14}>
          <Link href="/about">Sobre</Link>
        </Box>
      </Flex>

      <Footer />
    </>
  )
  }
}
