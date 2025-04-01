export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "INIT":
      return action.data;
    default:
      return state;
  }
};
