import { createContext, useReducer, useEffect } from 'react';
import { boardReducer } from '../reducers/boardReducer';

export const BoardContext = createContext();

const BoardContextProvider = (props) => {
  const [lists, dispatch] = useReducer(boardReducer, [], () => {
    const localData = localStorage.getItem('lists');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return <BoardContext.Provider value={{ lists, dispatch }}>{props.children}</BoardContext.Provider>;
};

export default BoardContextProvider;
