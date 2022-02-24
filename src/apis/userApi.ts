import { client } from '@/apis';
import { URLS } from '@/constants';
import { JoinForm } from '@/types';

export const join = async (joinForm: JoinForm) =>
  client.post(URLS.API.AUTH.JOIN, joinForm);
