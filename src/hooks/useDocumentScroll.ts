import React, { useRef, useMemo, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

export const useDocumentScroll = (
  callback: (this: Document, event: Event) => any,
  deps: React.DependencyList,
) => {
  const documentRef = useRef(document);

  const memoizedCallback = useCallback(callback, deps);
  const throttleOnScroll = useMemo(() => throttle(memoizedCallback, 100), deps);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleOnScroll);
    return () =>
      documentRef.current.removeEventListener('scroll', throttleOnScroll);
  }, [throttleOnScroll]);
};
