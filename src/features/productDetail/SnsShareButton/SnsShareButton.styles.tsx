import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;

  cursor: pointer;
`;

export const Positioner = styled.div`
  position: absolute;
  left: -14rem;

  display: flex;
  gap: ${styles.space.level2}rem;
`;

const buttonSize = 4;

export const ShareButton = styled.button`
  padding: 0;
  outline: none;

  background: ${({ theme }) => theme.color.background};
  width: ${buttonSize}rem;
  height: ${buttonSize}rem;

  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.font};
  border-radius: 50%;

  font-size: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.font};
    color: ${({ theme }) => theme.color.background};
  }
`;
