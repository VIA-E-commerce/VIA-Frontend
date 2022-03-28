import { Dispatch, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';
import { scroller } from 'react-scroll';

import { headerHideState } from '@/state';
import { styles } from '@/styles';

interface UseClickPageButtonProps {
  to: string;
  setPageNum: Dispatch<SetStateAction<number>>;
  offset?: number;
}

export const useDetailTabPageButton = ({
  to,
  setPageNum,
  offset = 0,
}: UseClickPageButtonProps) => {
  const setHeaderHide = useSetRecoilState(headerHideState);

  const handleClickPageButton = (nextPage: number) => {
    setPageNum(nextPage);
    scroller.scrollTo(to, {
      offset: styles.component.tab.navHeight * -1 * styles.remToPx + offset,
    });
    setHeaderHide(true);
  };

  return handleClickPageButton;
};
