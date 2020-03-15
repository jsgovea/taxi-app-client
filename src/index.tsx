import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloProvider } from 'react-apollo';
import * as serviceWorker from './serviceWorker';
import client from './apollo';
import GlobalStyle from './global-styles';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
        <GlobalStyle />
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
