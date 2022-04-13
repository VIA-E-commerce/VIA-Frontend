import styled from '@emotion/styled';

import { styles } from '@/styles';
import { hexToRGB } from '@/utils';

export const CardWrapper = styled.article``;

const HOVER_MENU_HEIGHT = 4.8;

export const CardHeader = styled.header`
  position: relative;

  &:hover {
    div {
      height: ${HOVER_MENU_HEIGHT}rem;
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;

  display: block;
`;

export const CardHoverMenu = styled.div`
  background: ${({ theme }) => hexToRGB(theme.color.black, 0.7)};

  height: 0;
  overflow: hidden;

  &,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  gap: 8%;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  transition: height 0.1s ease-out;

  & svg {
    color: ${({ theme }) => theme.color.white};
    width: 2.4rem;
    height: 2.4rem;

    &:hover {
      color: ${({ theme }) => theme.color.star};
    }
  }
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
