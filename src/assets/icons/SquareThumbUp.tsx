import React from 'react';
import styled from 'styled-components';
import { BsSquareFill } from 'react-icons/bs';
import { MdThumbUpAlt } from 'react-icons/md';

const SquareThumbUp = () => {
  return (
    <StyledSquareThumbUp>
      <BsSquareFill />
      <MdThumbUpAlt />
    </StyledSquareThumbUp>
  );
};
const StyledSquareThumbUp = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  svg:nth-child(1) {
    color: blue !important;
  }

  svg:nth-child(2) {
    position: absolute;
    width: 1.1875rem;
  }
`;

export { SquareThumbUp };
