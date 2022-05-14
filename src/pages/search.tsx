import { useEffect, useState } from 'react'

import {  
  Text, 
  Center,
  Flex, 
  Grid, 
  GridItem, 
  UnorderedList, 
  ListIcon, 
  ListItem, 
  Heading, 
  Input 
} from "@chakra-ui/react"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

import { FaSearch, FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'

import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from "@apollo/client"



export default function Search() {

 // API

const { error, loading, data } = useQuery(LOAD_INFO)
const [rocket, setRocket] = useState([])

useEffect(() => {
  if(data){
    setRocket(data.rockets)
  }
},[data])

  // SEARCH 
  const [value, setValue] = useState('')

  const onChange = (event: any) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm: string) => {
    //  Api to search results
    setValue(searchTerm)
    console.log('Search', searchTerm)
  }


  return (
    <>
      <Header />

        {/* Search bar */}
        <Center mb={12}>
          <Flex flexDirection="column">
            <Flex 
              alignItems="center"
              borderRadius={8}
              bg='purple.50' 
              w='70vw'  
              mt={8} 
              p={4}
            >

            <Input 
              placeholder='Busque por foguetes...' 
              variant='unstyled'
              w="95%" 
              me={4} 
              type="text" 
              value={value}
              onChange={onChange}
            />

            <FaSearch 
              fontSize={20}
              cursor="pointer"
              type="submit"
              onClick={() => onSearch(value)}
            />
            </Flex>
          </Flex>
        </Center>



        {/* Rocket List */}
        <Center>
          <Heading>Listagem de Foguetes...</Heading>
        </Center>
        <Center>
          <Grid templateColumns='repeat(2, 1fr)' gap={4}> 
          {rocket.filter((item) => {
                  const searchTerm = value.toLowerCase()
                  const name = item.name.toLowerCase()

                  return searchTerm && name.startsWith(searchTerm)
            })
            .map((value, key) =>{            
              return(
                <GridItem 
                  key={key} 
                  bg="white" 
                  p={4} m={4} 
                  borderRadius={10} 
                  boxShadow='xl'
                  cursor='pointer'
                  _hover={{
                    border: '1px solid'
                  }}
                >
                  <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                    <ListItem>
                        <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                        <Flex alignItems="center">
                          <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                          <Text color="gray.500">{value.name}</Text>
                        </Flex>
                      </ListItem>

                      <ListItem>
                        <Flex alignItems="center">
                          <Flex flexDirection="column">
                            <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                            <Text color="gray.500">
                              {value.description}
                            </Text>
                          </Flex>
                        </Flex>
                      </ListItem>

                      <ListItem>
                      <Flex alignItems="center">
                        <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                        <CurrencyFormat 
                          value={value.cost_per_launch} 
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
                          <Text color="gray.500">{value.company}</Text>
                        </Flex>
                      </ListItem>
                  </UnorderedList>
                </GridItem>
              )
          })}

          </Grid>
        </Center>
      <Footer />
    </>
  )
}
