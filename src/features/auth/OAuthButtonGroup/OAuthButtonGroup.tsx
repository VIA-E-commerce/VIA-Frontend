import React, { memo } from 'react';

import { LOGIN_PROVIDERS } from '@/constants';
import { AuthType } from '@/types';

import { OAuthButton } from './OAuthButton';
import { Wrapper } from './OAuthButtonGroup.styles';

interface Props {
  type: AuthType;
}

const OAuthButtonGroup = ({ type }: Props) => {
  return (
    <Wrapper>
      {LOGIN_PROVIDERS.map((provider) => (
        <OAuthButton key={provider.name} provider={provider} type={type} />
      ))}
    </Wrapper>
  );
};

export default memo(OAuthButtonGroup);
