import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const labelBottomPadding = styles.space.level3;
export const Label = styled.h5`
  margin: 0;
  margin-bottom: ${labelBottomPadding}rem;
  padding: ${labelBottomPadding}rem 0;

  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;

export const Contents = styled.div``;
