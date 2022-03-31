import React, { useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Pagination, SquareButton } from '@/components';
import { QUERY } from '@/constants';
import { useDetailTabPageButton } from '@/hooks';
import {
  currentUserState,
  questionEditorState,
  questionModalState,
} from '@/state';
import {
  PaginationResponse,
  ProductDetailResponse,
  QuestionResponse,
} from '@/types';

import { QuestionItem } from '../QuestionItem';
import { ListBody, ListFooter, EmptyList } from './QuestionList.styles';

const QUESTION_PAGE_RANGE = 5;

interface QuestionListProps {
  product: ProductDetailResponse;
  data?: PaginationResponse<QuestionResponse>;
  tabId: string;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionList = ({
  product,
  data: pagination,
  tabId,
  pageNum,
  setPageNum,
}: QuestionListProps) => {
  const setQuestionModal = useSetRecoilState(questionModalState);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const currentUser = useRecoilValue(currentUserState);
  const setQuestionEditorState = useSetRecoilState(questionEditorState);

  const handleClickWrite = () => {
    setQuestionModal((prev) => ({ ...prev, show: true }));
  };

  const handleClickPageButton = useDetailTabPageButton({
    to: tabId,
    setPageNum,
    offset: -4,
  });
  const questions = pagination?.list;

  const handleClickQuestion = useCallback(
    (questionId: number) => {
      setActiveQuestionId((prev) => {
        return prev === questionId ? null : questionId;
      });
      setQuestionEditorState((prev) => ({
        ...prev,
        productId: product.id,
        productName: product.name,
      }));
    },
    [product],
  );

  return (
    <div>
      <ListBody>
        {questions?.length ? (
          questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              active={activeQuestionId === question.id}
              owned={currentUser && currentUser.id === question.userId}
              onClick={() => handleClickQuestion(question.id)}
              queryKey={QUERY.PRODUCT.QUESTIONS}
            />
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
