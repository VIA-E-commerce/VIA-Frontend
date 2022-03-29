import styled from '@emotion/styled';

interface StyleProps {
  background?: string;
}
export const Wrapper = styled.div<StyleProps>`
  ${({ background }) => background && `background: ${background};`}

  width: 4.8rem;
  height: 4.8rem;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2.4rem;
    aspect-ratio: 1;
  }
`;
