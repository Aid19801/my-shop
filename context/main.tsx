import * as React from "react";
import { ProductType } from "pages/api/category";

type State = {
  basket: ProductType[] | [];
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (id: string | number) => void;
};

export const MainContext = React.createContext<State>({
  basket: [],
  addToBasket: () => undefined,
  removeFromBasket: () => undefined,
});

export const useMainContext = (): React.ContextType<typeof MainContext> =>
  React.useContext<State>(MainContext);

export const MainContextProvider: React.FC<any> = ({ children }) => {
  const [basket, updateBasket] = React.useState<ProductType[] | []>([]);

  const addToBasket = (product: ProductType) => {
    const updated = [...basket, product];
    updateBasket(updated);
  };

  const removeFromBasket = (id: string | number) => {
    const updated = basket.filter((each) => each.id !== id);
    updateBasket(updated);
  };
  console.log("basket ", basket);
  return (
    <MainContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
