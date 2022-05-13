import { useEffect, useState } from 'react'

import {  Text, Box, Center, Flex, Grid, GridItem, Input, Link, UnorderedList, ListIcon, ListItem, Spacer, Heading } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

import { FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'

import { LOAD_INFO } from '../GraphQL/queries'
import { useQuery } from "@apollo/client"


export default function Search() {

  function search() {
    console.log("Searching...")
  }

 
// const rocket = [
//   [{
//     company: 'SpaceX',
//     name: 'Falcon 1',
//     description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
//     cost_per_launch: 9000
//   }],
//   [{
//   company: 'SpaceX',
//   name: 'Apollo 9',
//   description: 'The Apollo 9 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
//   cost_per_launch: 7300
// }],
// [{
//   company: 'SpaceA',
//   name: 'Eagle 12',
//   description: 'The Eagle 12 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
//   cost_per_launch: 3000
// }],
// [{
//   company: 'Andromeda',
//   name: 'Pegasus',
//   description: 'The Pegasus was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
//   cost_per_launch: 93000
// }],
// ]

const {error, loading, data} = useQuery(LOAD_INFO)

const [rocket, setRocket] = useState([])

useEffect(() => {
  if(data){
    setRocket(data.rockets)
  }
},[data])

  return (
    <>
      <Header />

      {/* Search BAR */}
        <Center>
          <Flex 
            alignItems="center"
            borderRadius={8}
            bg='purple.50' 
            w='70vw' 
            mb={12} 
            mt={8} 
            p={4}
          >

          <Input 
            placeholder='Busque por foguetes...' 
            variant='unstyled'
            w="95%" 
            me={4} 
            // value={text}
            // onChange={(e) => onChangeHandler(e.target.value)}
          />

          <FaSearch 
            fontSize={20}
            cursor="pointer"
            type="submit"
            onClick={search}
          />
          </Flex>
        </Center>

        {/* Rocket List */}
        <Center>
          <Heading>Listagem de Foguetes...</Heading>
        </Center>
        <Center>
          <Grid templateColumns='repeat(2, 1fr)' gap={4}> 

          {rocket.map((value, key) =>{            
              return(
                <GridItem key={key} bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
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
        {/* back/next buttons */}
        <Flex mb={12} mx={8} pb={4}>
        <Box>
          <Link href='/about'>Voltar</Link>
        </Box>

        <Spacer />

        <Box>
          <Link href='/'>Home</Link>
        </Box>
      </Flex>
      <Footer />
    </>
  )
}