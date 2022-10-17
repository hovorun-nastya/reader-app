import { unstable_getServerSession } from 'next-auth/next';
import {authOptions} from './auth/[...nextauth]';
export default async (request, responce) => {
  const session = await unstable_getServerSession(request, responce, authOptions);
  if (session) {
    responce.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    });
  } else {
    responce.send({
      error: 'You must be signed in to view the protected content on this page.',
    });
  }
};
