import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: var(--color-background-default);
  height: var(--navbar-height);
  border-bottom: solid 1px var(--color-primary-main);
  box-shadow: var(--box-shadow) var(--color-shadow);
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    line-height: 20px;
    font-size: 22px;
    color: var(--color-text-light);
    font-weight: 400;
    letter-spacing: 0.015rem;
  }
`;

const Navbar = () => {
  return (
    <StyledContainer>
      <h2>Trello Clone</h2>
    </StyledContainer>
  );
};

export default Navbar;
