import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 0 0.6rem;

  border-radius: 999rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${styles.fontSize.xsmall}rem;
  line-height: 2rem;
`;
