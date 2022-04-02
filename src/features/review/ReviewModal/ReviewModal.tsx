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
import { Scroll, Wrapper, Header, Body, Footer } from './ReviewModal.styles';

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

    modalScrollRef,
    mode,
  } = useReviewEditor(queryKey);

  return (
    <Modal show={show} onMouseDown={onMouseDown}>
      <Scroll ref={modalScrollRef}>
        <Wrapper onMouseDown={(event) => event.stopPropagation()}>
          <Header>
            <h5>상품 후기 {mode === 'add' ? '작성' : '수정'}</h5>
            <div>
              <div>{productName}</div>
            </div>
          </Header>
          <Body>
            <LabelField label="별점" vertical>
              <StarRating rating={rating} onChangeRating={onChangeRating} />
            </LabelField>
            <LabelField label="내용" vertical>
              <TextArea
                name="content"
                autoHeight
                value={content}
                onChange={onChangeContent}
              />
            </LabelField>
            <LabelField label="사진" vertical>
              <ImageInput url={imageUrl} onClickUrlButton={onClickUrlButton} />
            </LabelField>
          </Body>
          <Footer>
            <SquareButton wide onClick={onSubmit}>
              후기 등록
            </SquareButton>
          </Footer>
        </Wrapper>
      </Scroll>
    </Modal>
  );
};

export default ReviewModal;
