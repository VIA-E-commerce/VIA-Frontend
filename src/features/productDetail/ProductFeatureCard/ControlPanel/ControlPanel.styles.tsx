import styled from '@emotion/styled';

import { ButtonGroup } from '@/components';
import { styles } from '@/styles';

export const TotalPrice = styled.div`
  height: 100%;

  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: ${styles.fontSize.h4}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const BuyButtonGroup = styled(ButtonGroup)`
  margin-top: ${styles.space.level4}rem;
`;
