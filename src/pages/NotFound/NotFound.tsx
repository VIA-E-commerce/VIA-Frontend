import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: inherit;

  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return <Wrapper>페이지를 찾을 수 없습니다.</Wrapper>;
};

export default NotFound;
