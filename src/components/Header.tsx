import { Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

// import { SiSpacex } from 'react-icons/si'

export const Header = () => {
  return (
    <>
      <Center bg='purple.700' h='100px' color='white'>
        <Heading as='h1'>SpaceX </Heading>
      </Center>
    </>
  )
}
