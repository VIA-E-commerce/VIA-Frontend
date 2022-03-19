import { styles } from '@/styles';
import styled from '@emotion/styled';

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.gray};
  }
`;

export const ListFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  .center-menu {
    grid-column: 2;
  }

  .right-menu {
    grid-column: 3;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      width: 10.4rem;
    }
  }
`;

export const EmptyList = styled.div`
  height: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
