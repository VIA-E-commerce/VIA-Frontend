import { APP } from '@/constants';

interface Props {
  url: string;
  thumbnail: string;
  description?: string;
}

export function shareKakao({ url, thumbnail, description = '' }: Props) {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) kakao.init(APP.KAKAO_JS_KEY);

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: document.title,
        description,
        imageUrl: thumbnail,
        link: {
          webUrl: url,
          mobileWebUrl: url,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      ],
    });
  }
}
