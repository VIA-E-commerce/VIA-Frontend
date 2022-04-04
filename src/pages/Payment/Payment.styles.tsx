import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-bottom: 12rem;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level9}rem;

  .label {
    color: ${({ theme }) => theme.color.lightDark};
  }

  .discount .content {
    color: ${({ theme }) => theme.color.error};
  }

  .paymentReal .content {
    font-weight: ${styles.fontWeight.bold};
  }
`;

export const BottomMenu = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: center;

  button {
    width: 12rem;
  }
`;
