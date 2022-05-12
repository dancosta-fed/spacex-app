import { Heading, Center, Box, Text } from '@chakra-ui/react'
import { useQuery } from "@apollo/client"
import { Header } from '../components/Header'
import Link from 'next/link'
import { LOAD_INFO } from '../GraphQL/queries'


export default function Home() {
 
  const {error, loading, data} = useQuery(LOAD_INFO)
  const company = data['company']

  console.log(data['company'], ' outra opção: ', data.company)


  return (
    <>
      <Header />
      <Center>
        <Box borderRadius={8} bg='purple.50' w='80vw' mt={8} p={4}>
          <Heading>Saiba mais sobre a SpaceX</Heading>
          <Box mt={10}>
            <Text>
              {company.ceo} é o CEO da {company.name}. A empresa foi fundada em {company.founded}.
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
