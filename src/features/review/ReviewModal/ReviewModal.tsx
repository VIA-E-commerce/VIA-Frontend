import React from 'react';
import { QueryKey } from 'react-query';

import {
  ImageInput,
  LabelField,
  Modal,
  SquareButton,
  StarRating,
  TextArea,
} from '@/components';

import { useReviewEditor } from './useReviewEditor';
import { Wrapper, Header, Body, Section, Footer } from './ReviewModal.styles';

interface Props {
  queryKey: QueryKey;
}

const ReviewModal = ({ queryKey }: Props) => {
  const {
    show,
    onMouseDown,

    rating,
    content,
    imageUrl,
    productName,
    onChangeRating,
    onChangeContent,
    onClickUrlButton,
    onSubmit,

    mode,
  } = useReviewEditor(queryKey);

  return (
    <Modal show={show} onMouseDown={onMouseDown}>
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Header>
          <h5>상품 후기 {mode === 'add' ? '작성' : '수정'}</h5>
          <div>
            <div>{productName}</div>
          </div>
        </Header>
        <Body>
          <Section>
            <LabelField label="별점" vertical>
              <StarRating rating={rating} onChangeRating={onChangeRating} />
            </LabelField>
            <LabelField label="내용" vertical>
              <TextArea
                name="content"
                value={content}
                onChange={onChangeContent}
              />
            </LabelField>
          </Section>
          <Section>
            <LabelField label="사진" vertical>
              <ImageInput
                url={imageUrl}
                objectFit="contain"
                onClickUrlButton={onClickUrlButton}
              />
            </LabelField>
          </Section>
        </Body>
        <Footer>
          <SquareButton wide onClick={onSubmit}>
            후기 {mode === 'add' ? '등록' : '수정'}
          </SquareButton>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default ReviewModal;
