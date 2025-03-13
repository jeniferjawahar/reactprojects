import { useState } from "react";
import data from "./data";
import "./style.css";

const btnStyle = {
  color: "yellow",
  backgroundColor: "black",
  fontSize: "25px",
};

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
    console.log("single");
  }

  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    if (cpyMultiple.indexOf(id) === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(id, 1);
    }
    setMultiple(cpyMultiple);
  }

  function toggleAccordian(a) {
    setEnableMultiSelection(!enableMultiSelection);
  }

  console.log(multiple);
  return (
    <div className="container">
      <button
        onClick={toggleAccordian}
        style={enableMultiSelection ? btnStyle : null}
      >
        Enable multiselection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>{selected !== dataItem.id ? "+" : "-"}</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
