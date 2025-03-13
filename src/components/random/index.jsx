import { useEffect, useState } from "react";

export default function Random() {
  const [color, setColor] = useState("#000");
  const [type, setType] = useState("hex");

  let hexColor = "#";

  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function generateRandomNum(num) {
    let randomNum = Math.floor(Math.random() * num);
    console.log(randomNum);
    return randomNum;
  }

  function handleGenerateRandomHex() {
    for (let i = 0; i < 6; i++) {
      hexColor += hexArr[generateRandomNum(hexArr.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleGenerateRandomRGB() {
    let r = generateRandomNum(256);
    let g = generateRandomNum(256);
    let b = generateRandomNum(256);
    let rgbColor = `rgb(${r},${g},${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  }

  function handleGenerateRandom() {
    if (type === "hex") {
      setType("rgb");
    } else {
      setType("hex");
    }
  }

  useEffect(() => {
    if (type === "rgb") handleGenerateRandomRGB();
    else handleGenerateRandomHex();
  }, [type]);

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <button onClick={handleGenerateRandomHex}>
        Generate Random Hex color
      </button>
      {type === "hex" ? <p>Hex {color}</p> : <p>RGB + {color} </p>}

      <button onClick={handleGenerateRandomRGB}>
        Generate Random RGB color
      </button>

      <button onClick={function () {
        
      }}>Generate Random</button>
    </div>
  );
}

function foo() { }
var foo1 = function (a) {
  console.log(a)
}
var foo2 = (a) => {
  console.log(a)
}
 
