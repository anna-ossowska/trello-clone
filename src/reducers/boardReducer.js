const initialState = { lists: [] };

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      return [
        ...state,
        {
          listId: action.payload.listId,
          listTitle: action.payload.listTitle,
          cards: [],
        },
      ];
    }

    case 'ADD_CARD': {
      const foundListIndex = state.findIndex(
        (list) => list.listId === action.payload.listId
      );
      state[foundListIndex] = action.payload;

      return [...state];
    }

    case 'UPDATE_ELEMENT': {
      const foundListIndex = state.findIndex(
        (list) => list.listId === action.payload.listId
      );
      state[foundListIndex] = action.payload;

      return [...state];
    }

    case 'DELETE_LIST': {
      return state.filter((list) => list.listId !== action.listId);
    }

    default:
      return state;
  }
};
