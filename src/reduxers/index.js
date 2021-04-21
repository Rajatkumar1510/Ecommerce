import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer
});
export default reducers;
