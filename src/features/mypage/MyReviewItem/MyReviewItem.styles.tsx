import { styles } from '@/styles';
import styled from '@emotion/styled';

const verticalGap = styles.space.level4;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${verticalGap}rem;

  padding: ${styles.space.level4}rem;
`;

export const Header = styled.div`
  display: flex;

  h5 {
    margin: 0;

    &:hover a {
      color: ${({ theme }) => theme.color.darkGray};
      text-decoration: underline;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-left: auto;

  display: flex;
  gap: ${styles.space.level3}rem;

  button {
    font-size: ${styles.fontSize.normal}rem;

    &.edit {
      color: ${({ theme }) => theme.color.font};

      &:hover {
        color: ${({ theme }) => theme.color.darkGray};
      }
    }

    &.delete {
      color: ${({ theme }) => theme.color.error};
    }
  }
`;

export const Body = styled.div`
  display: flex;
  gap: ${styles.space.level9}rem;
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${verticalGap}rem;

  text-align: justify;

  .info {
    display: flex;
    gap: ${styles.space.level6}rem;

    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${styles.fontSize.small}rem;

    .created-at {
      display: flex;
      align-items: center;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 12rem;
    aspect-ratio: 1;
    object-fit: contain;
  }
`;
