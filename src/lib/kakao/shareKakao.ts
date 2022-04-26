import { APP } from '@/constants';
import { ProductDetailResponse } from '@/types';

interface Props {
  url: string;
  product: ProductDetailResponse;
  description?: string;
}

export function shareKakao({ url, product, description }: Props) {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) kakao.init(APP.KAKAO_JS_KEY);

    kakao.Link.sendDefault({
      objectType: 'commerce',
      content: {
        title: document.title,
        imageUrl: product.images[0],
        link: {
          webUrl: url,
          mobileWebUrl: url,
        },
      },
      commerce: {
        productName: product.name,
        regularPrice: product.retailPrice,
        discountPrice: product.sellingPrice,
      },
      buttons: [
        {
          title: '구매하기',
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
        {
          title: '공유하기',
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      ],
    });
  }
}
