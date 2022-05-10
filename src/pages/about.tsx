import React from 'react'
import { Heading, Center, Box, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      <Center>
        <Heading as='h3' mt={8}>About SpaceX</Heading>
        <Box borderRadius={8} bg='purple.50' w='80vw' mt={8} p={4}>
          <Heading>Saiba mais sobre a SpaceX</Heading>
          <Box mt={10}>
            <Text>
              {/* {company.ceo} é o CEO da SpaceX. A empresa foi fundada em {company.founded}. */}
            </Text>
            <Text>
              Para saber mais sobre a empresa... <Link href='/about'>clique aqui</Link>!
            </Text>
          </Box>
        </Box>
      </Center>
    </>
  )
}
