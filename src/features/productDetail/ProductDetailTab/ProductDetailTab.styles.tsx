import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    padding-bottom: ${styles.component.productDetail.tab.paddingBottom}rem;
  }
`;

export const Title = styled.h4`
  height: 6.4rem;
  margin-bottom: 0;

  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;
