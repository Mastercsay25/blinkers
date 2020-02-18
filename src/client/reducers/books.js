export default (state = [], action) => {
  switch (action.type) {
    case "STORE_BOOKS":
      return [
        ...state,
        ...action.books
      ]
    default:
      return state
  }
};