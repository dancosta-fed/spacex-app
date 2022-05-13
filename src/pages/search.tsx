import {  Box, Center, Flex, Grid, GridItem, Input, Link, List, ListIcon, ListItem, Spacer, Tag } from "@chakra-ui/react";
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
          <Grid templateColumns='repeat(3, 1fr)' gap={6}> 

            {/* Rocket 1 */}
            <GridItem>
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
            </GridItem>

            <GridItem>
              {/* Rocket 2 */}
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
            </GridItem>

            <GridItem>
              {/* Rocket 3 */}
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
