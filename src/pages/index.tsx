import { Heading, Center, Box, Text } from '@chakra-ui/react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client"

export default function Home({ company, rockets }) {
  console.log('launches:', company, 'rocket:', rockets)
  return (
    <>
      <Center bg='purple.700' h='100px' color='white'>
        <Heading as='h1'>SpaceX App</Heading>
      </Center>
      <Center>
        <Box borderRadius={8} bg='purple.50' w='80vw' h='80vh' mt={8} p={4}>
          <Heading>Latest from launches SpaceX</Heading>

          <Text mt={10}>This is a text</Text>
        </Box>
      </Center>
    </>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql `
      query SpaceData {
        company {
          ceo
          coo
          founded
          valuation
          employees
        }
        rockets {
          company
          name
          description
          cost_per_launch
        }
      }
    `
  })

  console.log('data', data)

  return {
    props: {
      company: data.company,
      rockets: data.rockets,
    }
  }
}
