import { createContext, useContext } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error(
      "useTodoState는 TodoStateContext.Provider 안에서 사용해야 합니다."
    );
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useTodoState는 TodoStateContext.Provider 안에서 사용해야 합니다."
    );
  }
  return context;
};
