import React from 'react';
import {useSession} from 'next-auth/react';

const UserPage = () => {
  const {data: session} = useSession();
  if (session) {
    return (
      <div>
        Signed in as {session.user.email} <br/>
      </div>
    );
  }
  return (
    <div>Not signed in</div>
  );
};

export default UserPage;
