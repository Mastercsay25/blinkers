export default (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        ...action.credentials
      }
    case "LOG_OUT":
      return {};
    default:
      return state;
  }
};