import React from 'react';
import { useSession } from 'next-auth/react';

const UserPage = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <div>
        Signed in as { session?.user?.email } <br/>
      </div>
    );
  }
  return (
    <div>Not signed in</div>
  );
};

export default UserPage;
