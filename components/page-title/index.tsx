import * as React from "react";

type TitleProps = {
  text: string;
};
export const PageTitle: React.FC<TitleProps> = ({ text }) => (
  <>
    <h1>{text}</h1>
    <style jsx>{`
      h1 {
        text-align: center;
        font-family: monospace;
        font-size: 50px;
        color: white;
        background: red;
        padding: 20px 20px;
        transform: skewY(-1deg);
      }
    `}</style>
  </>
);

export default PageTitle;
