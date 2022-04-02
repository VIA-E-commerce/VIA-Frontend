import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Scroll = styled.div`
  width: 100%;
  padding: 16rem 0;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background};

  width: 60rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level4}rem;

  padding: 4.8rem ${styles.space.level8}rem;
`;

export const Header = styled.div`
  h5 {
    margin: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level4}rem;
`;

export const Footer = styled.div``;
