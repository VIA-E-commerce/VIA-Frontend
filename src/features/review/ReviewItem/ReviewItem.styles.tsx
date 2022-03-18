import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level4}rem;
  padding: 2.4rem 0;

  font-size: ${styles.fontSize.small}rem;

  &:not(:first-of-type) {
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.gray};
  }
`;

export const ReviewHeader = styled.header`
  color: ${({ theme }) => theme.color.darkGray};
  height: 2.4rem;

  display: flex;
  gap: 3.2rem;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const ReviewBody = styled.div`
  min-height: 8rem;

  display: flex;
  gap: 4rem;
`;

export const ReviewImage = styled.div`
  margin-right: 4rem;
  width: 12rem;

  img {
    width: 100%;

    display: block;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

export const ReviewContent = styled.div`
  flex: 1;

  height: 12rem;
  text-align: justify;
`;

export const ReviewFooter = styled.footer`
  color: ${({ theme }) => theme.color.darkGray};

  height: 2.4rem;

  display: flex;
  align-items: center;
  gap: ${styles.space.level4}rem;

  button {
    color: inherit;

    width: 6.4rem;
    height: 2.4rem;

    font-size: ${styles.fontSize.xsmall}rem;
  }
`;
