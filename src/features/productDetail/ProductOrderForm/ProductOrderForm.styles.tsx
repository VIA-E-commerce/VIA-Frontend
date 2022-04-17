import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ButtonGroup } from '@/components';
import { styles, Theme } from '@/styles';

export const FormSection = styled.section`
  grid-column: 7 / span 6;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const bodyGap = styles.space.level4;
const getBodyBorderStyle = (theme: Theme) => {
  const borderStyle = `${styles.border.level2}rem solid ${theme.color.font}`;
  return css`
    border-top: ${borderStyle};
    border-bottom: ${borderStyle};
  `;
};

export const Body = styled.div`
  padding: 2.4rem 0;

  display: flex;
  flex-direction: column;
  gap: ${bodyGap}rem;

  ${({ theme }) => getBodyBorderStyle(theme)}

  section + section, section + footer {
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.gray};
    padding-top: ${bodyGap}rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: ${bodyGap}rem;
  }
`;

export const ProductName = styled.h4`
  margin: 0;

  height: 4rem;

  font-weight: ${styles.fontWeight.regular};
`;

export const TotalPrice = styled.div`
  height: 100%;

  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: ${styles.fontSize.h4}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const BuyButtonGroup = styled(ButtonGroup)`
  margin-top: ${styles.space.level4}rem;
`;

export const Footer = styled.footer``;
