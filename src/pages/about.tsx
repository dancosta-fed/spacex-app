import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from '@apollo/client'

import { 
  Heading,
  Box, 
  Text, 
  Flex, 
  ListItem, 
  ListIcon, 
  Spacer, 
  GridItem, 
  UnorderedList, 
  Center 
} from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'

export default  function  About() {

   const { error, loading, data } = useQuery(LOAD_INFO)

  const [business, setBusiness] = useState([])
  const [rocket, setRocket] = useState([])

  useEffect(() => {
    setBusiness(data.business)
    setRocket(data.rockets)
  },[data])


  return (
    <>
      <Header />
      <Flex flexDirection='column' align='center'>

        <Heading as='h3' mt={8}>About {data.company.name}</Heading>
          <Box borderRadius={8} bg='purple.50' w='80vw' mb={12} mt={8} p={4}>
            <Flex flexDirection='column' gap={10} justifyContent='space-between'>

              {/* EMPRESA */}
              <Box >
                <Heading>A empresa</Heading>

                <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                  <ListItem>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">CEO:</Text> 
                      <Text color='gray.500' >{data.company.ceo}</Text>
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">COO:</Text> 
                      <Text color='gray.500' >{data.company.coo}</Text>
                    </Flex>
                  </ListItem>
                
                  <ListItem>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">Ano de fundação:</Text> 
                      <Text color='gray.500' >{data.company.founded}</Text>
                    </Flex>
                  </ListItem>
      
                  <ListItem>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">Valuation:</Text>  
                      <CurrencyFormat 
                        value={data.company.valuation} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'} 
                      />
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">No. Funcionários:</Text> 
                      <Text color='gray.500' >{data.company.employees}</Text>
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
