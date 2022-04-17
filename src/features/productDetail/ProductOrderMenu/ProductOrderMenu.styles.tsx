import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.article`
  display: flex;
  gap: ${styles.grid.gutter}rem;

  & > section {
    flex: 1;
  }
`;

export const TopButtonGroup = styled.div`
  height: 4rem;

  display: flex;
  justify-content: flex-end;
  gap: ${styles.space.level5}rem;

  svg {
    font-size: ${styles.fontSize.h4}rem;
  }
`;

export const ProductImages = styled.section`
  grid-column: 1 / span 6;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;
