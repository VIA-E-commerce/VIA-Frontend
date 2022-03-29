import React from 'react';
import { useSetRecoilState } from 'recoil';

import { Pagination, SquareButton } from '@/components';
import { useDetailTabPageButton } from '@/hooks';
import { questionModalState } from '@/state';
import { PaginationResponse, QuestionResponse } from '@/types';

import { QuestionItem } from './QuestionItem';
import { ListBody, ListFooter, EmptyList } from './QuestionList.styles';

const QUESTION_PAGE_RANGE = 5;

interface QuestionListProps {
  data?: PaginationResponse<QuestionResponse>;
  tabId: string;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionList = ({
  data: pagination,
  tabId,
  pageNum,
  setPageNum,
}: QuestionListProps) => {
  const setQuestionModal = useSetRecoilState(questionModalState);

  const handleClickWrite = () => {
    setQuestionModal((prev) => ({ ...prev, show: true }));
  };

  const handleClickPageButton = useDetailTabPageButton({
    to: tabId,
    setPageNum,
    offset: -4,
  });
  const questions = pagination?.list;

  return (
    <div>
      <ListBody>
        {questions?.length ? (
          questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))
        ) : (
          <EmptyList>등록된 문의가 없습니다</EmptyList>
        )}
      </ListBody>
      <ListFooter>
        <div className="center-menu">
          <Pagination
            currentPage={pageNum}
            pageRange={QUESTION_PAGE_RANGE}
            totalPages={pagination?.totalPages || 1}
            onClickPageButton={handleClickPageButton}
          />
        </div>
        <div className="right-menu">
          <SquareButton
            variant="outline"
            size="small"
            onClick={handleClickWrite}
          >
            문의 작성
          </SquareButton>
        </div>
      </ListFooter>
    </div>
  );
};

export default QuestionList;
