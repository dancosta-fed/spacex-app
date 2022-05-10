import { Heading } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Center bg='purple.700' h='100px' color='white'>
        <Heading as='h1'>Welcome to the Marvolous SpaceX App</Heading>
      </Center>
    </>
  )
}


// - Home:
// - Opção para ver informações da empresa;
// - Opção para buscar por foguetes;