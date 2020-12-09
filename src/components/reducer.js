export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  console.log('Reducer in action');
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case 'REMOVE_FROM_BASKET':
      //pass
      return state;
      break;

    default:
      return state;
  }
};
