import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {ApolloProvider} from '@apollo/client';
import apolloClient from '../lib/apollo';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps:{ session, ...pageProperties} }: AppProps) {
  return(
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProperties} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default App;
