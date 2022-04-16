import styled from '@emotion/styled';

import { styles, ObjectFitType } from '@/styles';

interface StyleProps {
  objectFit: ObjectFitType;
}

export const Wrapper = styled.div<StyleProps>`
  height: inherit;

  img {
    width: 100%;
    object-fit: ${({ objectFit }) => objectFit};
  }
`;

export const EmptyImage = styled.div`
  border: 0.4rem dotted ${({ theme }) => theme.color.lightGray};

  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${styles.fontSize.normal}rem;
`;
