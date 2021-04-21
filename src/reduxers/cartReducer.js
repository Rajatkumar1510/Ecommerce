const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CART":
      return state;
    case "ADD_CART":
      return state;
    case "UPDATE_CART":
      return state;
    case "DELETE_CART":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
