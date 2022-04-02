import styled from '@emotion/styled';

import { styles } from '@/styles';

interface StyleProps {
  active: boolean;
  readOnly?: boolean;
}

export const Wrapper = styled.div<StyleProps>`
  width: 2.4rem;

  svg {
    font-size: ${styles.fontSize.large}rem;
  }

  overflow: hidden;

  color: ${({ theme, active }) =>
    active ? theme.color.star : theme.color.gray};

  label {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    ${({ readOnly }) => !readOnly && 'cursor: pointer;'}
  }

  input {
    display: none;
  }
`;
