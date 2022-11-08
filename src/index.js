import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import { useQuery } from 'react-apollo';




const root = ReactDOM.createRoot(document.getElementById('root'));

const link = new HttpLink({
  uri: "http://localhost:4000/",
});
const client = new ApolloClient({
  uri:"http://localhost:4000/",
  onError: (e) => { console.log(e) },
  cache: new InMemoryCache()
});

const products =
  gql`
 { 
  product(id:"huarache-x-stussy-le"){
    id
    name
    inStock
    gallery
    description
    category
     brand
  }
}`

  
root.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
