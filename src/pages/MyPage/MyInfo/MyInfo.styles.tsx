import styled from '@emotion/styled';

import { styles } from '@/styles';

export const MyInfoForm = styled.form`
  padding: 5.6rem;

  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};
`;

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
