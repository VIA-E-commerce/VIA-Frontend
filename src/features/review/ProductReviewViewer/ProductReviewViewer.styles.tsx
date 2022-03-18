import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReivewSortMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  height: 4.8rem;

  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};

  display: flex;
  gap: ${styles.space.level5}rem;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &.active {
      font-weight: ${styles.fontWeight.bold};
    }
  }
`;

export const ReviewList = styled.div``;
