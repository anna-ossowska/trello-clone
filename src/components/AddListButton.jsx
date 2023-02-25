import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from '../assets/icons';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const StyledButton = styled.button`
  background: var(--color-primary-main);
  color: var(--color-text-light);
  border-radius: var(--border-radius);
  padding: 9px 10px;
  border: none;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const AddListButton = ({ title, setIsAddListOpen }) => {
  const handleClick = () => {
    setIsAddListOpen(false);
  };

  return (
    <ButtonContainer>
      <StyledButton>{title}</StyledButton>
      <CloseButton onClick={handleClick}>
        <CloseIcon />
      </CloseButton>
    </ButtonContainer>
  );
};

export default AddListButton;
