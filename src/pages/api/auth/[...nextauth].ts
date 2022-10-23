import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export default NextAuth ( {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string ,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
  ],
  jwt:{
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy:'jwt'
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  events: {},
  debug: true,
});

