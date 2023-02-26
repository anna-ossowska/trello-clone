const initialState = { lists: [] };

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      console.log('action', action);
      console.log('state', state);
      return [
        ...state,
        {
          listId: action.payload.listId,
          listTitle: action.payload.listTitle,
          cards: [],
        },
      ];

    case 'DELETE_LIST':
      return state.filter((list) => list.listId !== action.listId);

    default:
      return state;
  }
};
