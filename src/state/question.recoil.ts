import { atom } from 'recoil';

export type QuestionEditorMode = 'add' | 'edit';
interface QuestionEditorState {
  title: string;
  content: string;
  isPrivate: boolean;
  mode?: QuestionEditorMode;
  questionId?: number;
}

export const questionEditorState = atom<QuestionEditorState>({
  key: 'questionFormState',
  default: {
    title: '',
    content: '',
    isPrivate: false,
    mode: 'add',
  },
});
