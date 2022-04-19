import * as React from "react";
import Link from "next/link";
import { processLongStrings } from "../../lib/utils";

type ProductCardProps = {
  title: string;
  description?: string;
  img?: string;
  height?: number;
  width?: number;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  height = 300,
  width = 500,
  title,
  description,
  img,
}) => {
  return (
    <>
      <div className="card">
        <div className="card__imgContainer">
          <img src={img} alt={title} className="card__img" />
        </div>
        <div className="card__infoContainer__bottom">
          <h4>{title}</h4>
          {description && <p>{processLongStrings(description)}</p>}
        </div>
        <div className="card__buttonsContainer">
          <button onClick={() => null}>Add To Cart</button>
          <button onClick={() => null}>Remove To Cart</button>
        </div>
      </div>
      <style jsx>{`
        .card {
          border: 2px solid rgba(0, 0, 0, 0.2);
          transition: 300ms ease-in-out;
          width: ${width}px;
          height: ${height}px;
          padding: 30px 50px;
          border-radius: 4px;
          box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
            rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
          background: rgba(255, 255, 255, 1);
          position: relative;
        }
        .card:hover {
          border: 4px solid red;
          background: rgba(255, 255, 255, 1);
        }
        .card__imgContainer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          max-height: 50%;
          min-height: 50%;
          contain: content;
        }
        .card__img {
          width: 100%;
          height: auto;
        }

        .card__buttonsContainer {
          display: flex;
          flex-direction: row;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 10;
          width: 50%;
          justify-content: space-evenly;
        }
        .card__buttonsContainer > button {
          margin-left: 10px;
          background: orange;
          color: white;
        }

        .card__infoContainer__bottom {
          padding: 10px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          max-height: 50%;
          height: 50%;
          contain: content;
          position: absolute;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
        }
        .card__infoContainer__top {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        h4 {
          color: black;
          margin: 0;
        }
        p {
          color: grey;
          font-size: 9px;
        }
      `}</style>
    </>
  );
};

export default ProductCard;
