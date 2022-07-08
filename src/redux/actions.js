// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: 5, name: "Learn Yzzoga", completed: false, prioity: "Medium" },
// };

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
// action creators => function
