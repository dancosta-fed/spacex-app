import { Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

// import { SiSpacex } from 'react-icons/si'

export const Nav = () => {
  return (
    <>
      <Flex 
        bg='purple.700' 
        h='100px' 
        color='white' 
        me={4} 
        align='center'
      >
        <Box me={4}>
          <Link href='/'> Home </Link>
        </Box>

        <Box me={4}>
          <Link href='/about'> Sobre </Link>
        </Box>

        <Box me={4}>
          <Link href='/search'> Busca </Link>
        </Box>
      </Flex>
    </>
  )
}
