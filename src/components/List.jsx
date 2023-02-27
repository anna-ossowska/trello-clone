import React, { useState, useContext } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { PlusIcon } from '../assets/icons';
import { AddButton } from './index';
import { BoardContext } from '../contexts/BoardContext';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-primary-light);
  border-radius: var(--border-radius);
  min-width: var(--card-width);
  max-width: var(--card-width);
  min-height: 84px;
  padding: 10px;
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

  &:hover {
    background: var(--color-primary-light-hover);
  }

  & svg {
    height: 1.2em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--color-text-semi-dark);
`;

const AddCardEditor = styled.div`
  min-width: calc(var(--card-width) - 20px);
  max-width: calc(var(--card-width) - 20px);
  border-radius: var(--border-radius);
  background: var(--color-primary-light);
  transition: height 0.5s ease-in;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  padding: 7px 10px;
  width: 100%;
  height: 36px;
  resize: none;
  font-size: 16px;
  font-family: var(--font-family-primary);
  border: 2px solid var(--color-primary-main);
  border-radius: var(--border-radius);
  overflow: hidden;

  &:focus {
    outline: none;
    border: 2px solid var(--color-primary-main);
    border-radius: var(--border-radius);
  }

  &.edit-title {
    padding: 1px 3.1px;
    margin-bottom: 15.5px;
    font-weight: 500;
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
`;

const StyledCard = styled.div`
  display: inline-block;
  overflow-wrap: break-word;
  min-height: 36px;
  padding: 4px 10px;
  margin-bottom: 8px;
  background: var(--color-background-paper);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-card);
  border: 2px solid var(--color-background-paper);
`;

const List = ({ listTitle, listId, cards }) => {
  const { lists, dispatch } = useContext(BoardContext);
  const [isElementOpen, setIsElementOpen] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isListTitleClicked, setIsListTitleClicked] = useState(false);

  const handleChangeText = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleBlur = (e) => {
    setEnteredTitle(e.target.value);

    if (e.target.value === '') return;

    dispatch({
      type: 'UPDATE_ELEMENT',
      payload: { listId, listTitle: enteredTitle, cards },
    });

    setIsListTitleClicked(false);
    setEnteredTitle('');
  };

  const handleAddCard = () => {
    setIsElementOpen(true);
  };

  const handleListTitleClick = (_, id) => {
    const foundListItem = lists.find((list) => list.listId === id);

    if (!foundListItem) return;

    setEnteredTitle(foundListItem.listTitle);
    setIsListTitleClicked(!isListTitleClicked);
  };

  return (
    <ListContainer>
      {!isListTitleClicked && (
        <ListTitle onClick={(e) => handleListTitleClick(e, listId)}>
          {listTitle}
        </ListTitle>
      )}

      {isListTitleClicked && (
        <StyledTextareaAutosize
          autoFocus
          value={enteredTitle}
          onChange={handleChangeText}
          onBlur={handleBlur}
          className="edit-title"
        />
      )}

      <CardContainer>
        {cards.map((card, index) => {
          return (
            <StyledCard key={`card-${index}`}>
              <p>{card.cardTitle}</p>
            </StyledCard>
          );
        })}
      </CardContainer>

      {!isElementOpen && (
        <AddCardRegularView onClick={handleAddCard}>
          <Wrapper>
            <PlusIcon />
            <p>Add a Card</p>
          </Wrapper>
        </AddCardRegularView>
      )}

      {isElementOpen && (
        <>
          <AddCardEditor>
            <StyledTextareaAutosize
              autoFocus
              placeholder="Enter the text for this card..."
              onChange={handleChangeText}
            />
            <AddButton
              elementType="card"
              elementId={listId}
              title="Add card"
              setIsElementOpen={setIsElementOpen}
              setEnteredTitle={setEnteredTitle}
              enteredTitle={enteredTitle}
            />
          </AddCardEditor>
        </>
      )}
    </ListContainer>
  );
};

export default List;
