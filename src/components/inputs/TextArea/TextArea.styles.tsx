import styled from '@emotion/styled';

import { styles } from '@/styles';

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: ${styles.space.level4}rem;
  resize: none;

  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.inputBorder};

  font-size: ${styles.fontSize.normal}rem;
`;
