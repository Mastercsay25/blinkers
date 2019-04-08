//FIXME: Redundant? seek a way to consolidate with favorites and cart
const wishlistReducerDefaultState = [];

const wishlistReducer = (state = wishlistReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST_BOOK":
      return [
        ...state,
        action.book
      ]
    case "REMOVE_WISHLIST_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
} 

export default wishlistReducer;