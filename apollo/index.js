import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
    uri: 'http://192.168.1.17:4000/graphql', // à changer
    cache: new InMemoryCache(),
});

export default api;