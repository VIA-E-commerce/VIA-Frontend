import React from 'react';

import { Layout, ScrollToTop } from '@/components';
import { useLogout, useMe } from '@/features/auth';
import { RootRouter } from '@/routes';

const App = () => {
  const { data: currentUser } = useMe();
  const { handleClickLogout } = useLogout();

  return (
    <Layout user={currentUser} onClickLogout={handleClickLogout}>
      <ScrollToTop />
      <RootRouter />
    </Layout>
  );
};

export default App;
