import styled from '@emotion/styled';

import {
  StyledButton,
  setButtonActiveStyle,
} from '../../buttons/SquareButton/SquareButton.styles';

export const StyledInput = styled.input`
  width: 0;
  opacity: 0;
  position: absolute;
`;

export const Label = styled(StyledButton)`
  ${StyledInput}:checked + & {
    ${({ theme, variant }) => setButtonActiveStyle(theme, variant)}
  }
`.withComponent('label');
