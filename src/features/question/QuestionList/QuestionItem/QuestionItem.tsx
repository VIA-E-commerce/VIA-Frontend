import React from 'react';
import { MdLock } from 'react-icons/md';

import { QuestionResponse } from '@/types';
import { formatDate } from '@/utils';

import { Wrapper } from './QuestionItem.styles';

interface QuestionItemProps {
  question: QuestionResponse;
}

const QuestionItem = ({ question }: QuestionItemProps) => {
  return (
    <Wrapper>
      <div className="private">{question.isPrivate && <MdLock />}</div>
      <div className="title">{question.title}</div>
      <div className="username">{question.username}</div>
      <div className="register-date">{formatDate(question.createdAt)}</div>
      <div className="answered"></div>
    </Wrapper>
  );
};

export default React.memo(QuestionItem);
