import styled from '@emotion/styled';

import { styles } from '@/styles';

export const CardWrapper = styled.article``;

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const CardBody = styled.section`
  margin-top: ${styles.space.level3}rem;
`;

export const CardTitle = styled.p`
  margin: 0;
  height: 2rem;

  font-size: ${styles.fontSize.small}rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardFooter = styled.footer`
  height: 3.2rem;
`;
