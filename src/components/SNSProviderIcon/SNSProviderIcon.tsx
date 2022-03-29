import React from 'react';

import { Provider } from '@/types';

import { Wrapper } from './SNSProviderIcon.styles';

interface Props {
  provider: Provider;
}

const SNSProviderIcon = ({ provider }: Props) => {
  return (
    <Wrapper background={provider.color}>
      <img src={provider.logo} alt={provider.name} />
    </Wrapper>
  );
};

export default SNSProviderIcon;
