
const filtersReducerDefaultState = {
  text: "",
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
    return {
      ...state,
      text: action.text
    }
    case "SORT_BY_DATE":
    return {

    }
    default:
    return state;
  }
} 