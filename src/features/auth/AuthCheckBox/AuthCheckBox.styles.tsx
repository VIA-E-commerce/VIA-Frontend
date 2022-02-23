import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 2.8rem;

  display: flex;
  align-items: center;

  input {
    margin: 0;
  }
`;

const CHECKBOX_SIZE = 1.6;
export const CheckBox = styled.input`
  width: ${CHECKBOX_SIZE}rem;
  height: ${CHECKBOX_SIZE}rem;
  border-radius: 0;
`;

export const Label = styled.label`
  margin-left: 1rem;

  font-size: ${styles.fontSize.small}rem;
`;
