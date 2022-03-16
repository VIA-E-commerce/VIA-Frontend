import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: inherit;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  margin: ${styles.space.level9}rem 0;
  flex-grow: 1;
`;
