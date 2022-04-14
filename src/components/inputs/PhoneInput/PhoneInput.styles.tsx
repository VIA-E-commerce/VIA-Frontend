import styled from '@emotion/styled';

import { styles } from '@/styles';

interface StyleProps {
  wide?: boolean;
}

export const Wrapper = styled.div<StyleProps>`
  width: ${({ wide }) => (wide ? '100%' : '28rem')};

  display: flex;
  gap: ${styles.space.level3}rem;

  .phone-1 {
    width: 8rem;
  }
`;
