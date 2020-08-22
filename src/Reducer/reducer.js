export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_ SEARCH_TERM",
};

// listen disptach action
const reducer = (state, action) => {
  console.log(action);
  const { type } = action;
  switch (type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
export default reducer;
