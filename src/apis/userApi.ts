import { client } from '@/apis';
import { URLS } from '@/constants';

export const fetchMe = async () => {
  const response = await client.get(URLS.API.USER.ME);
  return response.data;
};
