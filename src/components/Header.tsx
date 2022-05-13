import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Nav } from './nav'

// import { SiSpacex } from 'react-icons/si'

export const Header = () => {
  return (
    <>
      <Flex 
        bg='purple.700' 
        h='100px' 
        color='white'
        justifyContent="space-between"
        align='center'
      >
        <Heading ms={4} as='h1'>SpaceX </Heading>
        <Nav />
      </Flex>
    </>
  )
}
