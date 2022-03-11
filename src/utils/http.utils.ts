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
