import { atom } from 'recoil';

export const reviewModalState = atom({
  key: 'reviewModalState',
  default: {
    show: false,
  },
});

export type ReviewEditorMode = 'add' | 'edit';
interface ReviewEditorState {
  reviewId?: number;
  rating: number;
  content: string;
  imageUrl?: string;
  productId?: number;
  productName?: string;
  mode: ReviewEditorMode;
}

export const reviewEditorState = atom<ReviewEditorState>({
  key: 'reviewEditorState',
  default: {
    rating: 5,
    content: '',
    imageUrl: '',
    mode: 'add',
  },
});
