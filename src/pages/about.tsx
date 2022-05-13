import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from '@apollo/client'

import { Heading, Box, Text, Flex, ListItem, List, ListIcon, Tag, Spacer, GridItem, UnorderedList } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { GiSpaceSuit } from 'react-icons/gi'
import { SiSpacex } from 'react-icons/si'
import { FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'

export default  function  About() {

   const { error, loading, data } = useQuery(LOAD_INFO)

  // const [business, setBusiness] = useState([])
  // // const [rocket, setRocket] = useState([])

  // useEffect(() => {
  //   setBusiness(data.business)
  //   // console.log(data)
  // },[data])


  // console.log(data)

  return (
    <>
      <Header />
      <Flex flexDirection='column' align='center'>

        <Heading as='h3' mt={8}>About XXXXX</Heading>
          <Box borderRadius={8} bg='purple.50' w='80vw' mb={12} mt={8} p={4}>
            <Flex flexDirection='column' gap={10} justifyContent='space-between'>

              {/* EMPRESA */}
              <Box >
                <Heading>A empresa</Heading>

                <List spacing={3} ms={6} mt={4}>
                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={GiSpaceSuit} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >CEO:</Tag> XXXX 
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={GiSpaceSuit} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >COO:</Tag> XXX 
                    </Flex>
                  </ListItem>
                
                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >Ano de fundação:</Tag> XXX
                    </Flex>
                  </ListItem>
      
                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                      <Tag color='purple.500'>Valuation:</Tag>  
                      <CurrencyFormat 
                        value={1000} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'} 
                      />
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >No. Funcionários:</Tag> XXXX 
                    </Flex>
                  </ListItem>
                </List>
              </Box>

              {/* FOGUETES */}
              <Box>
                <Heading>Listagem de Foguete</Heading>
                {data['rockets'][0].map((rocket, key) =>{ 
                  return(
                    <GridItem key={key} bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
                    <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                      <ListItem>
                          <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                          <Flex alignItems="center">
                            <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                            <Text color="gray.500">{rocket.name}</Text>
                          </Flex>
                        </ListItem>
  
                        <ListItem>
                          <Flex alignItems="center">
                            <Flex flexDirection="column">
                              <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                              <Text color="gray.500">
                                {rocket.description}
                              </Text>
                            </Flex>
                          </Flex>
                        </ListItem>
  
                        <ListItem>
                        <Flex alignItems="center">
                          <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                          <CurrencyFormat 
                            value={rocket.cost_per_launch} 
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
                            <Text color="gray.500">{rocket.company}</Text>
                          </Flex>
                        </ListItem>
                    </UnorderedList>
                  </GridItem>
                  )
                })}
              
              </Box>

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
