import { useCallback, useState } from "react";
const wordLength = 5;
export default function useWordChecker(wordChecked) {
  const wordMatchingArray = new Array(wordLength).fill(0);

  const checkWord = useCallback(
    (wordToCheck) => {
      for (let i = 0; i < wordLength; i++) {
        if (wordChecked[i] === wordToCheck[i]) {
          wordMatchingArray[i] = 1;
        } else if (false) {
          // do something for if letter is present in word
        }
      }
      return wordMatchingArray;
    },
    [wordMatchingArray, wordChecked]
  );

  return { checkWord };
}
