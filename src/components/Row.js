import React, { useEffect, useState } from "react";

import Letter from "./Letter";

const Row = ({ setRow, row, word, setWord }) => {
  const blankWord = {
    letter1: "",
    letter2: "",
    letter3: "",
    letter4: "",
    letter5: "",
  };
  const [letter, setLetter] = useState(blankWord);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(letter).includes("")) return;
    setRow(row + 1);
    console.log(letter);
  };

  const handleLetterChange = (e) => {
    const { value, name } = e.target;
    const [inputName, inputIndex] = name.split("-");

    if (value.length >= 1) {
      if (parseInt(inputIndex) < 5) {
        const nextInput = document.querySelector(
          `input[name=letter-${parseInt(inputIndex) + 1}]`
        );
        if (nextInput !== null) {
          nextInput.focus();
        }
      }
    }
    setLetter({ ...letter, [`letter${inputIndex}`]: value.slice(-1) });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(letter).map((l, i) => {
        const indexedName = `letter-${l.slice(-1)}`;

        return (
          <Letter
            key={i}
            letterIndex={indexedName}
            row={row}
            col={`letter${i}`}
            setLetter={setLetter}
            handleLetterChange={handleLetterChange}
          />
        );
      })}

      <button>submit</button>
    </form>
  );
};

export default Row;