export const todosReducer = (state, action) => {
  // ADD, DELETE, TOGGLE
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loadind: false
      }
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(el => el.id !== action.payload.id),
        loadind: false
      }
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              isCompleted: !el.isCompleted,
            }
          }
          return el
        }),
        loadind: false
      }
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        todos: action.payload,
      }
    default:
      throw new Error(`Unsupported action type ${action.type} in todosReducer`)
  }
}