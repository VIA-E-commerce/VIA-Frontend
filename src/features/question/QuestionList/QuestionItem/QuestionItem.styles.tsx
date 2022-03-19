import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 8.8rem;

  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .private {
    width: 8rem;
    svg {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.h4}rem;
    }
  }

  .answered {
    width: 16rem;
  }

  .title {
    flex: 1;
  }

  .username {
    width: 16rem;
  }

  .register-date {
    width: 16rem;
  }
`;
