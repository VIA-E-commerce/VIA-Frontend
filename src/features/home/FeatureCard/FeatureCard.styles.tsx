import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Figure = styled.figure`
  width: 117.6rem;
  height: 48rem;
  margin: 0;

  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const FigureCaption = styled.figcaption`
  background: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.color.white};

  padding: 13.6rem 0 0 0;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  height: 10rem;
  line-height: 10rem;
`;

export const Description = styled.p`
  margin: 0;
  height: 4rem;

  display: flex;
  align-items: center;

  font-size: ${styles.fontSize.large}rem;
`;

export const ButtonBox = styled.div`
  margin-top: 4.6rem;

  display: flex;
  justify-content: center;

  button {
    width: 12rem;
  }
`;
