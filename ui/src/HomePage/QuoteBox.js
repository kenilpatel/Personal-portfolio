import { SortableItem } from "react-easy-sort";

export default function QuoteBox(props) {
  return (
    <SortableItem key={props.id}>
      <div className="column outer-box">
        <div className="quote-box center-text">
          {props.quote}
          <div className="author">-{props.author}</div>
        </div>

        <div className="color-plate">
          <input type="color" />
        </div>
      </div>
    </SortableItem>
  );
}
