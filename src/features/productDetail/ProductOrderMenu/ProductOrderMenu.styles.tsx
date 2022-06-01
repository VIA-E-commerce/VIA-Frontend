import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.article`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  column-gap: ${styles.grid.gutter}rem;
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
`;

export const LargeImage = styled.div`
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;
