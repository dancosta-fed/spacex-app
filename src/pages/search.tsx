import {  Text, Box, Center, Flex, Grid, GridItem, Input, Link, UnorderedList, ListIcon, ListItem, Spacer, Tag } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { SiSpacex } from 'react-icons/si'
import { FaSpaceShuttle } from 'react-icons/fa'
import * as CurrencyFormat from 'react-currency-format'

export default function Search() {

  function search() {
    console.log("Searching...")
  }

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
          <Grid templateColumns='repeat(2, 1fr)' gap={4}> 

              {/* Rocket 1 */}
            <GridItem bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
              <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                <ListItem>
                    <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                      <Text color="gray.500">Falcon 1</Text>
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <Flex flexDirection="column">
                        <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                        <Text color="gray.500">
                          The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth
                        </Text>
                      </Flex>
                    </Flex>
                  </ListItem>

                  <ListItem>
                  <Flex alignItems="center">
                    <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                    <CurrencyFormat 
                      value={1000} 
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
                      <Text color="gray.500">SpaceX</Text>
                    </Flex>
                  </ListItem>
              </UnorderedList>
            </GridItem>

              {/* ROCKET 2 */}
            <GridItem bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
              <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                <ListItem>
                    <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                      <Text color="gray.500">Eagle 2</Text>
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <Flex flexDirection="column">
                        <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                        <Text color="gray.500">
                          The Eagle 2 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth
                        </Text>
                      </Flex>
                    </Flex>
                  </ListItem>

                  <ListItem>
                  <Flex alignItems="center">
                    <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                    <CurrencyFormat 
                      value={1000} 
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
                      <Text color="gray.500">SpaceA</Text>
                    </Flex>
                  </ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
              {/* Rocket 3 */}
              <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                <ListItem>
                    <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                      <Text color="gray.500">Eagle 1</Text>
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <Flex flexDirection="column">
                        <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                        <Text color="gray.500">
                          The Eagle 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth
                        </Text>
                      </Flex>
                    </Flex>
                  </ListItem>

                  <ListItem>
                  <Flex alignItems="center">
                    <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                    <CurrencyFormat 
                      value={1000} 
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
                      <Text color="gray.500">SpaceX</Text>
                    </Flex>
                  </ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem bg="white" p={4} m={4} borderRadius={10} boxShadow='xl'>
              {/* Rocket 4 */}
              <UnorderedList spacing={3} ms={6} mt={4} gap={4} styleType="none">
                <ListItem>
                    <ListIcon as={FaSpaceShuttle} color='purple.900' fontSize={34}/>
                    <Flex alignItems="center">
                      <Text as='i' mr={4} color="purple.400">Nome do Foguete:</Text> 
                      <Text color="gray.500">Falcon 4</Text>
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems="center">
                      <Flex flexDirection="column">
                        <Text as='i' mr={4} color="purple.400">Descrição:</Text>
                        <Text color="gray.500">
                          The Falcon 4 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth
                        </Text>
                      </Flex>
                    </Flex>
                  </ListItem>

                  <ListItem>
                  <Flex alignItems="center">
                    <Text as='i' mr={4} color="purple.400">Custo de Lançamento:</Text>  
                    <CurrencyFormat 
                      value={1000} 
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
                      <Text color="gray.500">SpaceY</Text>
                    </Flex>
                  </ListItem>
              </UnorderedList>
            </GridItem>

          </Grid>
        </Center>
        {/* back/next buttons */}
        <Flex mt="340" mb={12} mx={8} pb={4}>
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
