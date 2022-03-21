import { Location, Path } from 'react-router';

import { LOCAL_STORAGE, URLS } from '@/constants';

import { isRedirectLocationState } from './type.utils';

type Pathname = string | string[];
type SearchObj = { [x: string]: string };

export interface PathOptions {
  pathname?: Pathname;
  search?: SearchObj;
}

export function parseToPath({ pathname: newPathname, search }: PathOptions) {
  let pathname = '';
  let query = '';

  if (newPathname) {
    pathname += getPathFromPathname(newPathname);
  }
  if (search) {
    if (query.length > 0) query += '&';
    query += getQueryFromSearchObj(search);
  }

  return `${pathname}${query && '?' + query}`;
}

function getPathFromPathname(pathname: Pathname) {
  const PATH_SEPARATOR = '/';

  if (Array.isArray(pathname)) {
    return pathname.reduce((acc, item) => acc + `${PATH_SEPARATOR}${item}`, '');
  } else {
    return pathname;
  }
}

function getQueryFromSearchObj(search: SearchObj) {
  let query = '';
  for (const key in search) {
    query += `${key}=${search[key]}&`;
  }
  query = query.slice(0, query.length - 1);

  return query;
}

export function parseLocationToRedirect(location: Location): Path {
  return {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  };
}

export function parseRoutePathToString(redirect: Path) {
  return `${redirect.pathname}${redirect.search}${redirect.hash}`;
}

export function setRedirect(location: Location) {
  if (!isRedirectLocationState(location.state)) return;

  const excludeUrls = new Set(['/join', '/login']);
  if (excludeUrls.has(location.state.redirect.pathname)) return;

  localStorage.setItem(
    LOCAL_STORAGE.REDIRECT,
    parseRoutePathToString(location.state.redirect),
  );
}

export function getRedirect() {
  const redirectTo =
    localStorage.getItem(LOCAL_STORAGE.REDIRECT) || URLS.CLIENT.HOME;
  localStorage.removeItem(LOCAL_STORAGE.REDIRECT);

  return redirectTo;
}
