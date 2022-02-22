import styled from '@emotion/styled';
import { mixins } from '@/styles';
import { SectionStyleProps } from './GridSection';

export const Section = styled.section<SectionStyleProps>`
  ${({ cols }) => mixins.grid(cols)}
`;
