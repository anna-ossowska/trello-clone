import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusIcon } from '../assets/icons';

const ListContainer = styled.div`
  background: var(--color-primary-light);
  border-radius: var(--border-radius);
  padding: 10px;
  min-width: var(--card-width);
  max-width: var(--card-width);
  min-height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-wrap: break-word;
`;

const ListTitle = styled.p`
  font-weight: 500;
  padding: 0 5px;
  margin-bottom: 15px;
`;

const AddCardRegularView = styled.div`
  font-size: 0.95em;
  padding: 4px;
  cursor: pointer;
  transition: background var(--custom-transition);

  &:hover {
    background: var(--color-primary-light-hover);
  }

  & svg {
    height: 1.2em;
  }
`;

const Wrapper = styled.div`
  color: var(--color-text-semi-dark);
  display: flex;
  align-items: center;
  gap: 2px;
`;

const List = ({ listTitle, listId, cards }) => {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  const handleAddCard = () => {
    setIsAddCardOpen(true);
  };

  return (
    <ListContainer>
      <ListTitle>{listTitle}</ListTitle>
      {!isAddCardOpen && (
        <AddCardRegularView onClick={handleAddCard}>
          <Wrapper>
            <PlusIcon />
            <p>Add a Card</p>
          </Wrapper>
        </AddCardRegularView>
      )}
    </ListContainer>
  );
};

export default List;
