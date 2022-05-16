import { useQuery } from "@apollo/client";
import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { Footer } from "../components/Footer";

import { Header } from "../components/Header";
import { LOAD_INFO } from "../Services/GraphQL/queries";

import { FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'


export default  function  About() {

   const { loading, data } = useQuery(LOAD_INFO)

  if (loading) {
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
  }

  if (data) {

    const {ceo, name, coo, founded, valuation, employees} = data.company
  
    return (
      <>
        <Header />
        <Flex flexDirection='column' align='center'>
  
          <Heading as='h3' mt={8}>About {name}</Heading>
            <Box borderRadius={8} bg='purple.50' w='80vw' mb={12} mt={8} p={4}>
              <Flex flexDirection='column' gap={10} justifyContent='space-between'>
  
                {/* EMPRESA */}
                <Box >
                  <Heading>A empresa</Heading>
  
                  <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                    <ListItem>
                      <Flex alignItems="center">
                        <Text as='i' mr={4} color="purple.400">CEO:</Text> 
                        <Text color='gray.500' >{ceo}</Text>
                      </Flex>
                    </ListItem>
  
                    <ListItem>
                      <Flex alignItems="center">
                        <Text as='i' mr={4} color="purple.400">COO:</Text> 
                        <Text color='gray.500' >{coo}</Text>
                      </Flex>
                    </ListItem>
                  
                    <ListItem>
                      <Flex alignItems="center">
                        <Text as='i' mr={4} color="purple.400">Ano de fundação:</Text> 
                        <Text color='gray.500' >{founded}</Text>
                      </Flex>
                    </ListItem>
        
                    <ListItem>
                      <Flex alignItems="center">
                        <Text as='i' mr={4} color="purple.400">Valuation:</Text>  
                        <CurrencyFormat 
                          value={valuation} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          prefix={'$'} 
                        />
                      </Flex>
                    </ListItem>
  
                    <ListItem>
                      <Flex alignItems="center">
                        <Text as='i' mr={4} color="purple.400">No. Funcionários:</Text> 
                        <Text color='gray.500' >{employees}</Text>
                      </Flex>
                    </ListItem>
                  </UnorderedList>
                </Box>
  
                {/* FOGUETES */}
                <Box>
                  <Heading>Sobre Foguetes...</Heading>
                      <GridItem bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
                      <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                        <ListItem>
                            <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                            <Flex alignItems="center">
                              <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                              <Text color="gray.500">{data.rockets[0].name}</Text>
                            </Flex>
                          </ListItem>
    
                          <ListItem>
                            <Flex alignItems="center">
                              <Flex flexDirection="column">
                                <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                                <Text color="gray.500">
                                  {data.rockets[0].description}
                                </Text>
                              </Flex>
                            </Flex>
                          </ListItem>
    
                          <ListItem>
                          <Flex alignItems="center">
                            <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                            <CurrencyFormat 
                              value={data.rockets[0].cost_per_launch} 
                              color="white"
                              displayType={'text'} 
                              thousandSeparator={true} 
                              prefix={'$'} 
                            />
                          </Flex>
                        </ListItem>
    
                          <ListItem>
                            <Flex alignItems="center">
                              <Text as='i' mr={4} color="purple.400">Empresa responsável:</Text> 
                              <Text color="gray.500">{data.rockets[0].company}</Text>
                            </Flex>
                          </ListItem>
                      </UnorderedList>
                    </GridItem>
                </Box>
  
                <Center>
                  <Box>
                    <Text>Quer ver mais foguetes? <Link href='/search'>Clique aqui!</Link></Text>
                  </Box>
                </Center>
              </Flex>
            </Box>
        </Flex>
        <Flex mb={12} mx={8} pb={4}>
          <Box>
            <Link href='/'>Voltar</Link>
          </Box>
  
          <Spacer />
  
          <Box>
            <Link href='/search'>Busca</Link>
          </Box>
        </Flex>
        <Footer />
      </>
    )
  }
}
