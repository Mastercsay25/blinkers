const cartReducerDefaultState = [];

//FIXME: Redundant? seek a way to consolidate with wishlist and favorites

const cartReducer = (state = cartReducerDefaultState , action) => {
  switch (action.type) {
    case "ADD_CART_BOOK":
      return [
        ...state,
        action.book
      ]
    case "REMOVE_CART_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
} 

export default cartReducer;