import React from 'react'

import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from '@apollo/client'

import { Heading, Box, Text, Flex, ListItem, List, ListIcon, Tag, Center } from '@chakra-ui/react'
import { Header } from '../components/Header'

import { GiSpaceSuit } from 'react-icons/gi'
import { SiSpacex } from 'react-icons/si'
import { FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'

export default function About() {

  const { data } = useQuery(LOAD_INFO)
  // const company = data['company']
  const company = data.company
  const rocket = data['rockets']



  return (
    <>
      <Header />
      <Flex flexDirection='column' align='center'>

        <Heading as='h3' mt={8}>About {company.name}</Heading>
          <Box borderRadius={8} bg='purple.50' w='80vw' mt={8} p={4}>
            <Flex align='center' justifyContent='space-between'>

              {/* EMPRESA */}
              <Box>
                <Heading>A empresa</Heading>

                <List spacing={3} ms={6} mt={4}>
                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={GiSpaceSuit} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >CEO:</Tag> {company.ceo} 
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={GiSpaceSuit} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >COO:</Tag> {company.coo} 
                    </Flex>
                  </ListItem>
                
                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >Ano de fundação:</Tag> {company.founded} 
                    </Flex>
                  </ListItem>
      
                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                      <Tag color='purple.500'>Valuation:</Tag>  
                      <CurrencyFormat 
                        value={company.valuation} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'} />
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <ListIcon as={SiSpacex} color='green.500' fontSize={34}/>
                      <Tag color='purple.500' >No. Funcionários:</Tag> {company.employees} 
                    </Flex>
                  </ListItem>
                </List>
              </Box>

              {/* FOGUETES */}
              <Box>
                <Heading>Listagem de Foguete</Heading>
                <List spacing={3} ms={6} mt={4}>
                  <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={FaSpaceShuttle} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Nome do Foguete:</Tag> 
                        {/* {rocket.name}  */}
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={FaSpaceShuttle} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Descrição:</Tag> 
                        {/* <Text> {rocket.description} </Text> */}
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={FaSpaceShuttle} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Status de Atividade:</Tag> 
                        {/* {rocket.stages}  */}
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={FaSpaceShuttle} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Custo Por Lançamento:</Tag> 
                        {/* {rocket.cost_per_launch}  */}
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon as={FaSpaceShuttle} color='green.500' fontSize={34}/>
                        <Tag color='purple.500' >Empresa responsável:</Tag> 
                        {/* {rocket.company}  */}
                      </Flex>
                    </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
      </Flex>
    </>
  )
}
