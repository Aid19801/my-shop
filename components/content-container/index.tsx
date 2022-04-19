import React from "react";

type ContentContainerProps = {
  children: React.ReactNode[] | React.ReactNode;
};
export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
}) => {
  return (
    <>
      <div className="content__container">{children}</div>
      <style jsx>{`
        .content__container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          justify-content: space-around;
          align-items: stretch;
          gap: 30px;
        }
      `}</style>
    </>
  );
};
