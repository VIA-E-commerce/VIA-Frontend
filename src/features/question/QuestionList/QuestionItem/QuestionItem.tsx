import React from 'react';
import { MdLock } from 'react-icons/md';
import { VscChevronDown } from 'react-icons/vsc';
import cx from 'classnames';

import { TransparentButton } from '@/components';
import { useQuestionItem } from '@/features/question';
import { QuestionResponse } from '@/types';
import { formatDate } from '@/utils';

import {
  Wrapper,
  Header,
  Collapse,
  QuestionButtonGroup,
  Contents,
} from './QuestionItem.styles';

interface QuestionItemProps {
  question: QuestionResponse;
  active?: boolean;
  owned?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const QuestionItem = ({
  question,
  active,
  owned,
  onClick,
}: QuestionItemProps) => {
  const activeClass = cx({ active });

  const { handleClickEdit, handleClickRemove } = useQuestionItem({ question });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((owned || !question.isPrivate) && onClick) {
      onClick(event);
    }
  };

  return (
    <Wrapper>
      <Header onClick={handleClick}>
        <div className="private">{question.isPrivate && <MdLock />}</div>
        <div className="title">{question.title}</div>
        <div className="username">{question.username}</div>
        <div className="register-date">{formatDate(question.createdAt)}</div>
        <div className="answered"></div>
        <div className="accordion">
          <VscChevronDown />
        </div>
      </Header>
      <Collapse className={activeClass}>
        <Contents>
          {owned && (
            <QuestionButtonGroup>
              <TransparentButton onClick={handleClickEdit}>
                수정
              </TransparentButton>
              <TransparentButton className="delete" onClick={handleClickRemove}>
                삭제
              </TransparentButton>
            </QuestionButtonGroup>
          )}
          {question.content}
        </Contents>
      </Collapse>
    </Wrapper>
  );
};

export default React.memo(QuestionItem);
