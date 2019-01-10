import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache }  from 'apollo-boost'

const GRAPHQL_SERVER_URI = 'https://countries.trevorblades.com/'

const hoc = withApollo(({ initialState }) => (
  new ApolloClient({
    uri: GRAPHQL_SERVER_URI,
    cache: new InMemoryCache().restore(initialState || {})
  })
))

export default hoc
