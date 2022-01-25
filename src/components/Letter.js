import * as S from "./letter.styled";

import React, { useEffect, useState } from "react";

const Letter = ({ letterIndex, handleLetterChange }) => {
  return (
    <S.LetterInput
      type="text"
      name={letterIndex}
      value={letterIndex.col}
      onChange={handleLetterChange}
    />
  );
};

export default Letter;