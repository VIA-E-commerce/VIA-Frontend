import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const StarIcon = styled.span`
  background: url(/images/star-gray.png);
  width: 12rem;
  height: 2.4rem;

  display: inline-block;
`;

interface YellowStarStyleProps {
  width: number;
}
export const YellowStar = styled.span<YellowStarStyleProps>`
  background: url(/images/star-yellow.png);

  width: ${({ width }) => width}%;
  height: 100%;

  display: inline-block;

  overflow: hidden;
`;
