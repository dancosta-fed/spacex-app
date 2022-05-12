import React from 'react'

import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from '@apollo/client'

import { Heading, Box, Text, Flex, ListItem, List, ListIcon, Tag, Center } from '@chakra-ui/react'
import { Header } from '../components/Header'

import { GiSpaceSuit } from 'react-icons/gi'
import { SiSpacex } from 'react-icons/si'

export default function About() {

  const {error, loading, data} = useQuery(LOAD_INFO)
  const company = data['company']

  return (
    <>
      <Header />
      <Flex flexDirection='column' align='center'>

        <Heading as='h3' mt={8}>About {company.name}</Heading>
       
          <Box borderRadius={8} bg='purple.50' w='80vw' mt={8} p={4}>

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
                  <Tag color='purple.500' >Valuation:</Tag> {company.valuation} 
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
      </Flex>
    </>
  )
}


// - Informações globais da empresa SpaceX:
// - CEO;
// - COO;
// - Ano de fundação;
// - Valuation;
// - Número de funcionários;

// - Listagem de um foguete:
// - Nome;
// - Descrição;
// - Status de atividade;
// - Empresa responsável;
// - Custo por lançamento;