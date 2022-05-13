import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { GiSpaceship } from 'react-icons/gi'

export const Footer = () => {
  return (
    <>
      <Flex 
        bg='purple.700' 
        h='50px' 
        color='white' 
        p={4} 
        justifyContent="center"
        mb={0}
        mt={10}
        w="100%"
        pos="fixed"
        bottom="0"
      >
        <Text me={4}>Created by Dan Costa</Text>
        <GiSpaceship />
      </Flex>
    </>
  )
}
