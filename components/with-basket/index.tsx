import * as React from "react";
import { useMainContext } from "../../context/main";
import { ProductType } from "../../pages/api/category";

export const withBasket = (EnrichedComponent: any) => {
  const Inner = () => {
    const { shopState } = useMainContext();
    return (
      <>
        <div className="basket__container">
          <h4>Your Basket</h4>
          {shopState &&
            shopState.basket &&
            shopState.basket.length > 0 &&
            shopState.basket.map((each: ProductType) => (
              <div key={each.id} className="basket__item">
                <p>{each.title}</p>
                <p>${each.price}</p>
                <h5>qty: {each.quantity}</h5>
              </div>
            ))}
        </div>
        <EnrichedComponent />
        <style jsx>{`
          .basket__container {
            position: fixed;
            z-index: 11;
            right: 10px;
            top: 150px;
            width: 180px;
            background: grey;
            border: 2px solid black;
            border-radius: 10px;
            padding: 20px;
          }
          .basket__item {
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: lightgrey;
            padding: 5px;
            margin-bottom: 5px;
            transform: skewY(1deg);
            border-radius: 10px;
          }
          .basket__item p {
            color: black;
          }
          .basket__item h5 {
            color: black;
            margin: 0;
          }
          h4 {
            color: lightgrey;
            font-family: monospace;
          }
          p {
            color: white;
            font-size: 10px;
          }
        `}</style>
      </>
    );
  };
  return Inner;
};

export default withBasket;
