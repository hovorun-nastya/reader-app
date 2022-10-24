import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {ApolloProvider} from '@apollo/client';
import apolloClient from '../lib/apollo';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

function App({ Component, pageProps: { ...pageProperties }  }: AppProps<{
  session: Session;
}>) {
  return(
    <SessionProvider session={ pageProperties.session }>
      <ApolloProvider client={ apolloClient }>
        <Component { ...pageProperties } />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default App;
