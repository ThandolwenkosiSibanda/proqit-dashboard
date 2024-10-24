import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// import './styles/proqitmain.css';
import './styles/proqitprimary.css';


import App from '../src/App';
import {
	ApolloClient, InMemoryCache, ApolloProvider, split,HttpLink } from '@apollo/client';
  import {getMainDefinition} from '@apollo/client/utilities';
  import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
  import {createClient} from 'graphql-ws';


  import { BrowserRouter } from "react-router-dom";


  const wsLink = new GraphQLWsLink(
    createClient({
      uri : 'http://localhost:5000/graphql'
 
    }),
    );
  
    const httpLink = new HttpLink({
    // uri : 'http://localhost:5000/graphql'
    uri: 'https://proqit-server.onrender.com/graphql',
    });
  
    const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query);
      return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
    );
  
    const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  
    });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <ApolloProvider client={client}>
      <BrowserRouter>
       <App />
       </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);


