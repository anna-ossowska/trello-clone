import React, { useContext } from 'react';
import styled from 'styled-components';
import { CloseIcon } from '../assets/icons';
import { BoardContext } from '../contexts/BoardContext';
import { nanoid } from 'nanoid';

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

const StyledButton = styled.button`
  display: inline-block;
  background: var(--color-primary-main);
  color: var(--color-text-light);
  border: none;
  border-radius: var(--border-radius);
  font-size: 14px;
  padding: 9px 10px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const AddButton = ({
  elementType,
  elementId,
  title,
  setIsElementOpen,
  enteredTitle,
  setEnteredTitle,
}) => {
  const { dispatch, lists } = useContext(BoardContext);

  const handleClose = () => {
    setIsElementOpen(false);
    setEnteredTitle('');
  };

  const handleAddList = () => {
    if (elementType === 'list') {
      dispatch({
        type: 'ADD_LIST',
        payload: { listId: nanoid(), listTitle: enteredTitle },
      });

      setIsElementOpen(false);
      setEnteredTitle('');
    }

    if (elementType === 'card') {
      const foundListItem = lists.find((list) => list.listId === elementId);

      if (foundListItem) {
        foundListItem.cards.push({ cardId: nanoid(), cardTitle: enteredTitle });
      }

      dispatch({
        type: 'ADD_CARD',
        payload: foundListItem,
      });

      setIsElementOpen(false);
      setEnteredTitle('');
    }
  };

  return (
    <ButtonContainer>
      <StyledButton
        onClick={handleAddList}
        disabled={enteredTitle.length === 0}
      >
        {title}
      </StyledButton>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
    </ButtonContainer>
  );
};

export default AddButton;
