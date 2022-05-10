import { Center, Heading } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <>
      <Center bg='purple.700' h='100px' color='white'>
        <Heading as='h1'>SpaceX App</Heading>
      </Center>
    </>
  )
}
