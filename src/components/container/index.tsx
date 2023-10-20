import React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Container = (props: Props) => {
  return (
    <div className="flex flex-col  items-center content-center flex-wrap ">
      {props.children}
    </div>
  );
};

export default Container;
