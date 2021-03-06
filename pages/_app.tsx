// import App, { Container } from 'next/app';  // Container has been deprecated.
import App from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient} from 'apollo-boost';
import { MyApolloClientCache } from '../lib/init-apollo';

interface MyAppProps {
    apolloClient: ApolloClient<MyApolloClientCache>;
}

class MyApp extends App<MyAppProps> {
    render () {
        const { Component, pageProps, apolloClient } = this.props

        return (
            // <Container>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps}/>
                </ApolloProvider>
            // </Container>
        );
    }
}

export default withApolloClient(MyApp);