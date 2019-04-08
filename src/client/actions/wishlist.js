export const addWishlistBook = (book) => ({
  type:"ADD_WISHLIST_BOOK",
  book
}); 

export const removeWishlistBook = ({ id } = {}) => ({
  type:"REMOVE_WISHLIST_BOOK",
  id
});