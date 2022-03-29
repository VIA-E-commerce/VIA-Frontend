import { styles } from '@/styles';
import styled from '@emotion/styled';

const padding = styles.space.level7;
export const FormCard = styled.form`
  background: ${({ theme }) => theme.color.background};
  padding: ${padding}rem;
  width: 64rem;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level3}rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level2}rem;

  h5 {
    margin: 0;
  }

  .product-info {
    margin: 0;

    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${styles.fontSize.small}rem;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ModalBody = styled.div`
  .title-and-private {
    display: grid;

    grid-template-columns: repeat(6, 1fr);

    & > div:nth-child(1) {
      grid-column: 1 / span 5;
    }
  }

  .content-box {
    width: 100%;

    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      height: 20rem;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${styles.space.level3}rem;

  button {
    width: 9.6rem;
  }
`;
