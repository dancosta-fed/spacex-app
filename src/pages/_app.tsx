import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
import { ApolloClient, InMemoryCache, gql, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'https://api.spacex.land/graphql/'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

export default function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

 