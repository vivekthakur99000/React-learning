import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [
        {
            id: 1,
            todo : "Todo text",
            completed : false
        }
    ],
    addTodo  : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {},
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider