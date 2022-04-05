import styled from '@emotion/styled';

import { mixins } from '@/styles';

interface StyleProps {
  background: string;
}

export const Wrapper = styled.div<StyleProps>`
  background: ${({ background }) => background};
`;

export const InnerWrapper = styled.div`
  ${mixins.innerWrapper()}

  img {
    width: 100%;
    display: block;
  }
`;
