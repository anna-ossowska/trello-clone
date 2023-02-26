export const BoardReducer = (state = { lists: [] }, action) => {
  const { listId } = action.payload;
  switch (action.type) {
    case 'ADD_LIST': {
      return { lists: [...state.lists, { listId, listTitle: '', cards: [] }] };
    }

    case 'DELETE_LIST': {
      const filteredList = state.lists.filter((list) => list.id !== listId);
      return { lists: filteredList };
    }

    default:
      return state;
  }
};
