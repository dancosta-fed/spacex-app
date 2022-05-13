import {  Center, Flex, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Search() {

  function search() {
    console.log("Searching...")
  }

  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
