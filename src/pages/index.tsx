import { useState, useEffect } from 'react'
import { Heading, Center, Box, Text } from '@chakra-ui/react'
import { gql, useQuery } from "@apollo/client"
import { Header } from '../components/Header'
import Link from 'next/link'
import { LOAD_INFO } from '../GraphQL/queries'

export default function Home() {
 
  const {error, loading, data} = useQuery(LOAD_INFO)

  const [company, setCompany] = useState([])

  useEffect(() => {
    // setCompany(data.company)
    console.log(data.company)
  }, [data])
  return (
    <>
      <Header />
      <Center>
        <Box borderRadius={8} bg='purple.50' w='80vw' mt={8} p={4}>
          <Heading>Saiba mais sobre a SpaceX</Heading>
          <Box mt={10}>
            <Text>
              {/* {data.company.ceo} é o CEO da SpaceX. A empresa foi fundada em {data.company.founded}. */}
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

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: 'https://api.spacex.land/graphql/',
//     cache: new InMemoryCache()
//   })

//   const { data } = await client.query({
//     query: gql `
//       query SpaceData {
//         company {
//           ceo
//           coo
//           founded
//           valuation
//           employees
//         }
//         rockets {
//           company
//           name
//           description
//           cost_per_launch
//         }
//       }
//     `
//   })

//   console.log('data', data)

//   return {
//     props: {
//       company: data.company,
//       rockets: data.rockets,
//     }
//   }
// }
