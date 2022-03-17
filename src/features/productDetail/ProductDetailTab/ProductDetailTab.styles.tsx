import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 14.4rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  height: 6.4rem;

  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;
