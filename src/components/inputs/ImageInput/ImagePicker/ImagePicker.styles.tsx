import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  height: 3.2rem;

  display: flex;
  gap: ${styles.space.level2}rem;

  input {
    flex-grow: 1;
  }
  button {
    width: 10.4rem;
  }
`;

export const URLButton = styled.button`
  border: none;

  background: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.fontReverse};

  width: 10.4rem;
  height: 100%;
  padding: ${styles.space.level1}rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.color.lightDark};
  }
`;
