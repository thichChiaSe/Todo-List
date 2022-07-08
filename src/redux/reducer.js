const initState = {
  filter: {
    search: "",
    status: "All",
    prioity: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, prioity: "Medium" },
    { id: 2, name: "Learn ABC", completed: false, prioity: "High" },
    { id: 3, name: "Learn YOYO", completed: false, prioity: "Low" },
  ],
};

export const rootReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  console.log({ action, state });
  switch (action.type) {
    case "todoList/addTodo": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload, //lưu cập nhật trên ui
          // { id: 4, name: "Learn YOYdddO", completed: false, prioity: "Low" },
        ],
      };
    }
    default:
      return state;
  }
};
