import React from 'react';

import { RootRouter } from '@/routes';
import { useMe } from '@/features/auth';
import { Layout } from '@/components';

const App = () => {
  const { data: currentUser } = useMe();

  return (
    <Layout user={currentUser}>
      <RootRouter />
    </Layout>
  );
};

export default App;
