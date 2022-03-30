import React from 'react';
import { MdLockOpen, MdLock } from 'react-icons/md';

import {
  Input,
  LabelField,
  Modal,
  SquareButton,
  TextArea,
  TextCounter,
  TransparentButton,
} from '@/components';
import { VALIDATION } from '@/constants';
import { ProductDetailResponse } from '@/types';

import { useQuestionForm } from '../useQuestionForm';
import {
  FormCard,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './QuestionEditorModal.styles';

interface Props {
  product: ProductDetailResponse;
}

const QuestionEditorModal = ({ product }: Props) => {
  const {
    show,
    onMouseDownModal,
    onMouseDownForm,
    onClickCancel,

    title,
    content,
    isPrivate,
    onChangeTitle,
    onClickPrivate,
    onChangeContent,
    onSubmit,

    mode,
  } = useQuestionForm({
    product,
  });

  const isAddMode = mode === 'add';

  return (
    <Modal show={show} onMouseDown={onMouseDownModal}>
      <FormCard onMouseDown={onMouseDownForm} onSubmit={onSubmit}>
        <ModalHeader>
          <h5>문의 {isAddMode ? '작성' : '수정'}</h5>
          <div className="product-info">{product.name}</div>
        </ModalHeader>
        <ModalBody>
          <div className="title-and-private">
            <LabelField label="제목" vertical bold>
              <Input
                name="title"
                placeholder="제목을 입력해주세요"
                value={title}
                maxLength={VALIDATION.QUESTION.TITLE.MAX_LENGTH}
                onChange={onChangeTitle}
              />
            </LabelField>
            <LabelField
              label="비밀글 체크"
              vertical
              bold
              labelAlign="center"
              contentAlign="center"
            >
              <TransparentButton onClick={onClickPrivate}>
                {isPrivate ? <MdLock size={24} /> : <MdLockOpen size={24} />}
              </TransparentButton>
            </LabelField>
          </div>
          <LabelField label="문의 내용" vertical bold>
            <div className="content-box">
              <TextArea
                name="content"
                placeholder="문의 내용을 입력해주세요"
                maxLength={VALIDATION.QUESTION.CONTENT.MAX_LENGTH}
                onChange={onChangeContent}
                value={content}
              />
              <TextCounter
                value={content}
                maxLength={VALIDATION.QUESTION.CONTENT.MAX_LENGTH}
              />
            </div>
          </LabelField>
        </ModalBody>
        <ModalFooter>
          <SquareButton size="small">
            {isAddMode ? '작성' : '수정'}
          </SquareButton>
          <SquareButton size="small" variant="outline" onClick={onClickCancel}>
            취소
          </SquareButton>
        </ModalFooter>
      </FormCard>
    </Modal>
  );
};

export default QuestionEditorModal;
