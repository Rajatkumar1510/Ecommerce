import { commerce } from "../lib/commerce";
export const fetchProducts = () => async (dispatch) => {
  //   const action = { type: "FETCH_PRODUCTS", payload: [] };
  //   dispatch(action);
  try {
    //  we get response instead of data but we later destructure it into data
    const { data } = await commerce.products.list();
    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
