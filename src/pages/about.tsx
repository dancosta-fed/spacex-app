import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from '@apollo/client'

import { Heading, Box, Text, Flex, ListItem, List, ListIcon, Tag, Spacer } from '@chakra-ui/react'
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


  console.log(data)

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

                <List spacing={3} ms={6} mt={4} gap={4}>
                  <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={FaSpaceShuttle} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Nome do Foguete:</Tag> 
                        XXXX 
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Descrição:</Tag> XXXX
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Status de Atividade:</Tag> 
                        XXXX 
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
                        <Tag color='purple.500' >Empresa responsável:</Tag> 
                        xxxxx
                      </Flex>
                    </ListItem>
                </List>
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
