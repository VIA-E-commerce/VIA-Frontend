import { styles } from '@/styles';
import styled from '@emotion/styled';

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

export const CardPrice = styled.div`
  height: 3.2rem;

  display: flex;
  align-items: flex-end;
  gap: ${styles.space.level2}rem;

  overflow: hidden;
`;

export const SellingPrice = styled.div`
  height: 3.2rem;

  display: flex;
  align-items: center;

  font-size: ${styles.fontSize.large}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const OriginalPrice = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${styles.fontSize.small}rem;
  text-decoration: line-through;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardFooter = styled.footer`
  height: 3.2rem;
`;
