import React from 'react';

import { Layout } from '@/components';
import { useLogout, useMe } from '@/features/auth';
import { RootRouter } from '@/routes';

const App = () => {
  const { data: currentUser } = useMe();
  const { handleClickLogout } = useLogout();

  return (
    <Layout user={currentUser} onClickLogout={handleClickLogout}>
      <RootRouter />
    </Layout>
  );
};

export default App;
