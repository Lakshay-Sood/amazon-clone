export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  // console.log('Reducer in action');
  // console.log(action);

  // this line does NOT make a DEEP COPY of state.basket (refer: https://learnersbucket.com/examples/array/how-to-copy-array-in-javascript/)
  // let newBasket = [...state.basket];
  // this code makes a DEEP COPY (and thus keeps the reducer a PURE FUNCTION)
  let newBasket = JSON.parse(JSON.stringify(state.basket));

  const itemIndex = newBasket.findIndex((item) => item.id === action.item.id);

  switch (action.type) {
    case 'ADD_TO_BASKET':
      // if item already in basket, increment 'quantity', else append the item to the basket
      if (itemIndex === -1) newBasket.push(action.item);
      else newBasket[itemIndex].quantity += 1;

      return {
        ...state,
        basket: newBasket,
      };
      break;

    case 'REMOVE_FROM_BASKET':
      // if single item, remove it from bucket; else decrement 'quantity'
      if (itemIndex === -1) console.warn('Item does not exist in your cart.');
      else if (newBasket[itemIndex].quantity <= 1)
        newBasket = newBasket.filter((ele) => ele.id !== action.item.id);
      else newBasket[itemIndex].quantity -= 1;

      return {
        ...state,
        basket: newBasket,
      };
      break;

    default:
      return state;
  }
};
