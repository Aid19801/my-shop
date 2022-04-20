import * as React from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT, basketReducer } from "./reducer";
import { ProductType } from "pages/api/category";

export type State = {
  shopState: {
    basket: ProductType[] | null;
  };
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (id: string | number) => void;
};

export const MainContext = React.createContext<State>({
  shopState: { basket: null },
  addToBasket: () => undefined,
  removeFromBasket: () => undefined,
});

export const useMainContext = (): React.ContextType<typeof MainContext> =>
  React.useContext<State>(MainContext);

export const MainContextProvider: React.FC<any> = ({ children }) => {
  const [shopState, dispatch] = React.useReducer(basketReducer, { basket: [] });

  const addToBasket = (product: ProductType) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 300);
  };

  const removeFromBasket = (id: string | number) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: id });
    }, 700);
  };

  return (
    <MainContext.Provider
      value={{
        shopState,
        addToBasket,
        removeFromBasket,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
