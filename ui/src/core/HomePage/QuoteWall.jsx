import React from "react";
import SortableList from "react-easy-sort";
import arrayMove from "array-move";
import QuoteBox from "./QuoteBox";
import NavButton from "./NavButton";

const QuoteWall = () => {
  let quotes = require("../../Resources/quotes_data.json");
  console.log(quotes);
  const [items, setItems] = React.useState(quotes);

  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  return (
    <div className="quote-wall quotes">
      <SortableList
        onSortEnd={onSortEnd}
        className="grid"
        draggedItemClassName="dragged"
      >
        <div className="ui stackable four column grid">
          {items.map((item) => (
            <QuoteBox {...item} key={item.id} />
          ))}
        </div>
      </SortableList>
      <NavButton />
    </div>
  );
};

export default QuoteWall;
