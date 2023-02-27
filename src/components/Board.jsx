import React, { useContext } from 'react';
import { List, AddList } from './index';
import { BoardContext } from '../contexts/BoardContext';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 10px;
  align-items: flex-start;
`;

// TODO Create draggable logic here
const Board = () => {
  const { lists } = useContext(BoardContext);

  return (
    <BoardContainer>
      {lists.map(({ listId, listTitle, cards }, index) => {
        return (
          <List
            key={`list-${index}`}
            listTitle={listTitle}
            listId={listId}
            cards={cards}
          />
        );
      })}
      <AddList />
    </BoardContainer>
  );
};

export default Board;
