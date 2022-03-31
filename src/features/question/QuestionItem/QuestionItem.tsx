import React from 'react';
import { QueryKey } from 'react-query';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { MdLock } from 'react-icons/md';
import { VscChevronDown } from 'react-icons/vsc';

import { TransparentButton } from '@/components';
import { URLS } from '@/constants';
import { MyQuestionResponse, QuestionResponse } from '@/types';
import { formatDate } from '@/utils';

import {
  Wrapper,
  Header,
  Title,
  Collapse,
  QuestionButtonGroup,
  Contents,
} from './QuestionItem.styles';
import { useQuestionItem } from './useQuestionItem';

interface QuestionItemProps {
  question: QuestionResponse | MyQuestionResponse;
  queryKey: QueryKey;
  active?: boolean;
  owned?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isForMyPage?: boolean;
}

const QuestionItem = ({
  question,
  queryKey,
  active,
  owned,
  onClick,
  isForMyPage,
}: QuestionItemProps) => {
  const activeClass = cx({ active });

  const myQuestion = question as MyQuestionResponse;
  const productUrl = `${URLS.CLIENT.PRODUCT}/${question.productId}`;

  const { handleClickEdit, handleClickRemove } = useQuestionItem({
    question,
    queryKey,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((owned || !question.isPrivate) && onClick) {
      onClick(event);
    }
  };

  return (
    <Wrapper>
      <Header onClick={handleClick}>
        <div className="private">{question.isPrivate && <MdLock />}</div>
        {isForMyPage && (
          <div className="thumbnail">
            <Link to={productUrl}>
              <img src={myQuestion.thumbnail} />
            </Link>
          </div>
        )}
        <Title>
          {isForMyPage && (
            <div className="product-name">
              <Link to={productUrl}>{myQuestion.productName}</Link>
            </div>
          )}
          <div className="title">{question.title}</div>
        </Title>
        {!isForMyPage && <div className="username">{question.username}</div>}
        <div className="created-at">{formatDate(question.createdAt)}</div>
        <div className="is-answered"></div>
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
