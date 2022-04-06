import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsLink45Deg } from 'react-icons/bs';
import { MdShare } from 'react-icons/md';
import { RiKakaoTalkFill, RiFacebookFill } from 'react-icons/ri';

import { useScript } from '@/hooks';
import { shareKakao } from '@/lib/kakao';

import {
  Wrapper,
  StyledButton,
  Positioner,
  ShareButton,
} from './SnsShareButton.styles';

interface Props {
  description?: string;
  thumbnail: string;
}

const SnsShareButton = ({ description, thumbnail }: Props) => {
  const [show, setShow] = useState(false);
  const positionerRef = useRef<HTMLDivElement>(null);

  const handleToggleShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShow((prev) => !prev);
  };

  // 주소 복사
  const url = window.location.href;
  const handleCopy = useCallback(() => {
    alert('주소가 복사되었습니다.');
  }, []);

  // 카카오톡 공유
  useScript('https://developers.kakao.com/sdk/js/kakao.js');

  // 페이스북 공유
  const handleShareFaceBook = useCallback((link: string) => {
    const requestUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      link,
    )}`;
    const width = 560;
    const height = 600;

    const top = window.screen.height / 2 - height / 2;
    const left = window.screen.width / 2 - width / 2;

    window.open(
      requestUrl,
      'Facebook에 공유하기',
      `width=${width}px, height=${height}px, top=${top}, left=${left}`,
    );
  }, []);

  useEffect(() => {
    const handleClosePositioner = (event: MouseEvent) => {
      const { target } = event;

      if (
        !positionerRef.current ||
        !positionerRef.current.contains(target as Node)
      ) {
        setShow(false);
      }
    };

    window.addEventListener('mousedown', handleClosePositioner);

    return () => window.removeEventListener('mousedown', handleClosePositioner);
  }, [positionerRef]);

  return (
    <Wrapper>
      <StyledButton onMouseDown={handleToggleShow}>
        <MdShare />
      </StyledButton>
      {show && (
        <Positioner ref={positionerRef}>
          <CopyToClipboard text={url} onCopy={handleCopy}>
            <ShareButton>
              <BsLink45Deg />
            </ShareButton>
          </CopyToClipboard>
          <ShareButton
            onClick={() => shareKakao({ url, description, thumbnail })}
          >
            <RiKakaoTalkFill />
          </ShareButton>
          <ShareButton
            onClick={() =>
              handleShareFaceBook(
                'https://lnsideout.tistory.com/entry/jQuery-windowopen-%ED%8C%9D%EC%97%85-%EC%99%84%EB%B2%BD%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC',
              )
            }
          >
            <RiFacebookFill />
          </ShareButton>
        </Positioner>
      )}
    </Wrapper>
  );
};

export default React.memo(SnsShareButton);
