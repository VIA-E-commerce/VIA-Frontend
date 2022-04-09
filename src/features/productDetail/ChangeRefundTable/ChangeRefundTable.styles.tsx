import styled from '@emotion/styled';

export const Table = styled.table`
  td {
    padding: 2rem;

    &:first-child {
      background: ${({ theme }) => theme.color.surface};
      width: 20rem;
      text-align: center;
    }
  }
`;
