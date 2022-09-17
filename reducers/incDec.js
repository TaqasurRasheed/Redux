const initialState = [];
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    case "ADD_USER":
      state.notes.push(action.payload);
      return;
    default:
      return state;
  }
};

export default changeTheNumber;
