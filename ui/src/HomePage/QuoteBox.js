import { SortableItem } from "react-easy-sort";
import { useState } from "react";

export default function QuoteBox(props) {
  const [color, setColor] = useState(props.color);

  function getBoxColor() {
    return `rgba(${color[0]},${color[1]},${color[2]},0.4)`;
  }

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : null;
  }

  return (
    <SortableItem key={props.id}>
      <div className="column outer-box">
        <div
          className="quote-box center-text"
          style={{ backgroundColor: getBoxColor() }}
        >
          {props.quote}
          <div className="author">-{props.author}</div>
        </div>
        <div className="color-plate">
          <input
            type="color"
            value={rgbToHex(...color)}
            onChange={(e) => setColor(hexToRgb(e.target.value))}
          />
        </div>
      </div>
    </SortableItem>
  );
}
