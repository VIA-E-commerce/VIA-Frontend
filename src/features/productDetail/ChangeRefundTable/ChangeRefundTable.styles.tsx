import styled from '@emotion/styled';

export const Table = styled.table`
  td {
    padding: 2rem;

    &:first-of-type {
      background: ${({ theme }) => theme.color.surface};
      width: 20rem;
      text-align: center;
    }
  }
`;
