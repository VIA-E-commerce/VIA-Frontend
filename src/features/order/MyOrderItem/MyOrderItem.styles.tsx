import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  padding: 2.4rem;
  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};
`;

export const Header = styled.div`
  margin-bottom: ${styles.space.level4}rem;

  display: flex;

  .right-menu {
    margin-left: auto;

    a {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.small}rem;

      display: flex;
      align-items: center;

      &:hover {
        color: ${({ theme }) => theme.color.font};
      }
    }
  }
`;
