import React, { useCallback, useState } from 'react';

import {
  useMyQuestions,
  QuestionItem,
  QuestionEditorModal,
} from '@/features/question';
import { GridSection, Pagination, Tab } from '@/components';
import { QUERY } from '@/constants';

const PAGE_RANGE = 5;
const PAGE_SIZE = 10;

const MyQuestions = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data: pagination } = useMyQuestions({
    pageNum,
    pageSize: PAGE_SIZE,
  });

  const questions = pagination?.list;

  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const handleClickQuestion = useCallback((questionId: number) => {
    setActiveQuestionId((prev) => {
      return prev === questionId ? null : questionId;
    });
  }, []);

  const onClickPageButton = (pageNum: number) => {
    setPageNum(pageNum);
  };

  if (!pagination || !questions) {
    return <GridSection cols={1}>로딩 중</GridSection>;
  }

  return (
    <>
      <Tab>
        <div>
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              active={activeQuestionId === question.id}
              owned
              onClick={() => handleClickQuestion(question.id)}
              queryKey={QUERY.USER.MY_QUESTIONS}
              isForMyPage={true}
            />
          ))}
        </div>
        <Pagination
          pageRange={PAGE_RANGE}
          totalPages={pagination.totalPages}
          currentPage={pageNum}
          onClickPageButton={onClickPageButton}
        />
      </Tab>

      <QuestionEditorModal queryKey={QUERY.USER.MY_QUESTIONS} />
    </>
  );
};

export default MyQuestions;
