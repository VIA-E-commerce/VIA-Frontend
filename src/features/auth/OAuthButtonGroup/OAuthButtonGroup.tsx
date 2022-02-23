import React, { memo } from 'react';

import { AuthType, Provider } from '@/types';
import { URLS } from '@/constants';

import { OAuthButton } from './OAuthButton';
import { Wrapper } from './OAuthButtonGroup.styles';

const providers: Provider[] = [
  {
    name: '카카오',
    color: '#FEE500',
    fontColor: '#000000',
    logo: '/images/kakao-logo.png',
    url: `${URLS.API.PREFIX}${URLS.API.AUTH.KAKAO}`,
  },
  {
    name: '네이버',
    color: '#03C75A',
    fontColor: '#FFFFFF',
    logo: '/images/naver-logo.png',
    url: `${URLS.API.PREFIX}${URLS.API.AUTH.NAVER}`,
  },
];

interface Props {
  type: AuthType;
}

const OAuthButtonGroup = ({ type }: Props) => {
  return (
    <Wrapper>
      {providers.map((provider) => (
        <OAuthButton key={provider.name} provider={provider} type={type} />
      ))}
    </Wrapper>
  );
};

export default memo(OAuthButtonGroup);
