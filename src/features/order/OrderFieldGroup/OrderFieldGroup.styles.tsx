import styled from '@emotion/styled';

import { styles } from '@/styles';

export const GroupTitle = styled.legend`
  margin: 0 0 ${styles.space.level5}rem 0;

  width: 100%;
  height: 6.4rem;
  line-height: 6.4rem;

  font-size: ${styles.fontSize.h5}rem;
  font-weight: ${styles.fontWeight.bold};

  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;

export const FieldSet = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export const FieldList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level5}rem;
`;
