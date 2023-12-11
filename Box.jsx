import React from "react";
import Item from "./Item";

const Box = (props) => {
  const items = props.data.map((sdata, key) => (
    <Item
      key={key}
      itemss={sdata.itemss}
      date={sdata.date}
      onDelete={() => props.removehandler(key)}
    />
  ));

  return <div className="p-3">{items}</div>;
};

export default Box;
