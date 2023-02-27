import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { PlusIcon } from '../assets/icons';
import { AddButton } from './index';

const AddListRegularView = styled.div`
  background: var(--color-secondary-main);
  min-width: var(--card-width);
  max-width: var(--card-width);
  color: var(--color-text-light);
  padding: 7px 10px;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary-main-hover);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AddListEditor = styled.div`
  background: var(--color-primary-light);
  border-radius: var(--border-radius);
  min-width: var(--card-width);
  max-width: var(--card-width);
  padding: 4px;
  transition: height 0.5s ease-in;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  height: 36px;
  padding: 7px 10px;
  font-size: 16px;
  resize: none;
  overflow: hidden;
  font-family: var(--font-family-primary);
  border: 2px solid var(--color-primary-main);
  border-radius: var(--border-radius);

  &:focus {
    outline: none;
    border: 2px solid var(--color-primary-main);
    border-radius: var(--border-radius);
  }
`;

const AddList = () => {
  const [isElementOpen, setIsElementOpen] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState('');

  const handleAddList = () => {
    setIsElementOpen(true);
  };

  const handleChangeText = (e) => {
    setEnteredTitle(e.target.value);
  };

  return (
    <div>
      {!isElementOpen && (
        <AddListRegularView onClick={handleAddList}>
          <Wrapper>
            <PlusIcon />
            <p>Add a list</p>
          </Wrapper>
        </AddListRegularView>
      )}

      {isElementOpen && (
        <>
          <AddListEditor>
            <StyledTextareaAutosize
              autoFocus
              placeholder="Enter list title..."
              onChange={handleChangeText}
            />
            <AddButton
              elementType="list"
              title="Add list"
              setIsElementOpen={setIsElementOpen}
              setEnteredTitle={setEnteredTitle}
              enteredTitle={enteredTitle}
            />
          </AddListEditor>
        </>
      )}
    </div>
  );
};

export default AddList;
