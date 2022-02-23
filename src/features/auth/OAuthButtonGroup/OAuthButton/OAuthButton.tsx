import React, { memo } from 'react';
import { AuthType, Provider } from '@/types';
import { StyledButton, IconWrapper } from './OAuthButton.styles';

interface Props {
  provider: Provider;
  type: AuthType;
}

const OAuthButton = ({ provider, type }: Props) => {
  const label = `${provider.name} 아이디로 ${
    type === 'join' ? '회원가입' : '로그인'
  }`;

  return (
    <div>
      <a href={provider.url}>
        <StyledButton color={provider.color} fontColor={provider.fontColor}>
          <IconWrapper>
            <img src={provider.logo} />
          </IconWrapper>
          {label}
        </StyledButton>
      </a>
    </div>
  );
};

export default memo(OAuthButton);
