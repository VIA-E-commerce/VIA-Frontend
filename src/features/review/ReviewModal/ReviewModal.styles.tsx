import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background};

  width: 120rem;
  margin: 0 auto;

  display: grid;
  gap: ${styles.space.level4}rem;

  padding: 4.8rem ${styles.space.level8}rem;
`;

export const Header = styled.div`
  h5 {
    margin: 0;
  }
`;

export const Body = styled.div`
  height: 52rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${styles.space.level4}rem;

  img {
    height: 43.2rem;
  }
`;

export const Section = styled.section`
  height: inherit;

  display: flex;
  flex-direction: column;

  div:last-of-type {
    flex: 1;
  }
`;

export const Footer = styled.div``;
