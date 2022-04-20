import { ProductType } from "pages/api/category";
import { State } from "./main";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product: ProductType, state: State) => {
  // @ts-ignore
  const updatedCart = [...state.basket];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    // @ts-ignore
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, basket: updatedCart };
};

const removeProductFromCart = (productId: number, state: State) => {
  // @ts-ignore
  const updatedCart = [...state.basket];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  // @ts-ignore
  updatedItem.quantity--;
  // @ts-ignore
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, basket: updatedCart };
};

export const basketReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
