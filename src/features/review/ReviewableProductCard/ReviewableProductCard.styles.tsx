import styled from '@emotion/styled';

import { styles } from '@/styles';

const PADDING_SIZE = 1.6;

export const Wrapper = styled.div`
  padding: ${PADDING_SIZE}rem;
  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.darkGray};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level4}rem;
`;

export const Thumbnail = styled.div`
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.p`
  margin: 0;

  height: 4.8rem;

  font-size: ${styles.fontSize.small}rem;

  display: flex;
  align-items: center;

  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BodyRightMenu = styled.div`
  margin-top: ${PADDING_SIZE}rem;
`;
