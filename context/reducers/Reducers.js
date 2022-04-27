const reducers = (state, action) => {
  switch (action.type) {
    case "AUTH": 
      return { ...state, user: action.payload };
    case "NOTIFY":
      return { ...state, notify: action.payload };
    case "ADD_WISH":
      return { ...state, wish: action.payload };
    case "ADD_CART":
      return { ...state, cart: action.payload };
    case "REMOVE_FROM_WISH":
      return { ...state, wish: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default reducers;
