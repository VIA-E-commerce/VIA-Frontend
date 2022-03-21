import { RedirectLocationState } from '@/types';

export function isRedirectLocationState(
  state: any,
): state is RedirectLocationState {
  return state?.redirect !== undefined;
}
