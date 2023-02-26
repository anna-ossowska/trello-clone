import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { PlusIcon } from '../assets/icons';
import { AddListButton } from './index';

const AddListRegularView = styled.div`
  background: var(--color-secondary-main);
  min-width: var(--card-width);
  max-width: var(--card-width);
  color: var(--color-text-light);
  padding: 7px 10px;
  cursor: pointer;
  transition: background var(--custom-transition);

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
  padding: 4px;
  min-width: var(--card-width);
  max-width: var(--card-width);
  transition: height 0.5s ease-in;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  padding: 7px 10px;
  width: 100%;
  height: 36px;
  resize: none;
  font-size: 14px;
  font-family: var(--font-family-primary);
  overflow: hidden;
  border: 2px solid var(--color-primary-main);
  border-radius: var(--border-radius);

  &:focus {
    outline: none;
    border: 2px solid var(--color-primary-main);
    border-radius: var(--border-radius);
  }
`;

const AddList = () => {
  const [isAddListOpen, setIsAddListOpen] = useState(false);
  const [enteredlistTitle, setEnteredlistTitle] = useState('');

  const handleAddList = () => {
    setIsAddListOpen(true);
  };

  const handleChangeText = (e) => {
    setEnteredlistTitle(e.target.value);
  };

  return (
    <div>
      {!isAddListOpen && (
        <AddListRegularView onClick={handleAddList}>
          <Wrapper>
            <PlusIcon />
            <p>Add a list</p>
          </Wrapper>
        </AddListRegularView>
      )}

      {isAddListOpen && (
        <div>
          <AddListEditor>
            <StyledTextareaAutosize
              placeholder="Enter list title..."
              onChange={handleChangeText}
            />
            <AddListButton
              title="Add list"
              setIsAddListOpen={setIsAddListOpen}
              setEnteredlistTitle={setEnteredlistTitle}
              enteredlistTitle={enteredlistTitle}
            />
          </AddListEditor>
        </div>
      )}
    </div>
  );
};

export default AddList;
