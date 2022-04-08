import styled from '@emotion/styled';

import { styles } from '@/styles';

export const MyInfoForm = styled.form``;

export const InnerWrapper = styled.div`
  width: 42.4rem;

  display: flex;
  flex-direction: column;
  align-items: wrap;
  gap: ${styles.space.level7}rem;
`;

export const FormFooter = styled.div`
  margin-top: 3.2rem;
`;

export const DeleteAccountButton = styled.button`
  background: none;
  border: none;
  outline: none;

  margin-top: 4rem;

  color: ${({ theme }) => theme.color.error};
  font-size: ${styles.fontSize.normal}rem;
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
