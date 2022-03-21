import styled from '@emotion/styled';

import { styles } from '@/styles';

const columnGap = styles.component.cart.itemPadding;

export const Wrapper = styled.article`
  height: 18rem;

  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.cartBorder};
  padding: ${columnGap}rem;

  display: flex;
  gap: ${columnGap}rem;
`;

export const OrderSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.div`
  height: 100%;

  img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;

    display: block;
  }

  &:hover {
    transform: scale(1.04);
  }

  transition: transform 0.15s ease-in-out;
`;

// 정보 섹션
export const Summary = styled.div`
  flex: 1;

  display: flex;
  gap: ${styles.space.level5}rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  .product-name {
    margin: 0;

    font-size: ${styles.fontSize.normal}rem;
    font-weight: ${styles.fontWeight.regular};

    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    transition: color 0.12s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.darkGray};
    }
  }

  .option {
    margin-top: auto;
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${styles.fontSize.small}rem;
  }
`;

// 수량 정보
const buttonGap = styles.space.level2;
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: ${buttonGap}rem;
`;

// 버튼 모음
export const Buttons = styled.div`
  width: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${buttonGap}rem;
`;
