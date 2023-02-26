import React, { useContext } from 'react';
import styled from 'styled-components';
import { CloseIcon } from '../assets/icons';
import { BoardContext } from '../contexts/BoardContext';
import { nanoid } from 'nanoid';

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

const AddListButton = ({
  title,
  setIsAddListOpen,
  enteredlistTitle,
  setEnteredListTitle,
}) => {
  const { dispatch } = useContext(BoardContext);
  const handleClose = () => {
    setIsAddListOpen(false);
  };

  const handleAddList = () => {
    dispatch({
      type: 'ADD_LIST',
      payload: { listId: nanoid(), listTitle: enteredlistTitle },
    });

    setIsAddListOpen(false);
    setEnteredListTitle('');
  };

  return (
    <ButtonContainer>
      <StyledButton
        onClick={handleAddList}
        disabled={enteredlistTitle.length === 0}
      >
        {title}
      </StyledButton>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
    </ButtonContainer>
  );
};

export default AddListButton;
