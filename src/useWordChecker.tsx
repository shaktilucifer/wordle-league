import { useCallback, useState } from "react";
import { LETTERSTATE, WORDLENGTH } from "./appConstants";

export default function useWordChecker(wordChecked) {
  const wordMatchingArray = new Array(WORDLENGTH).fill(-1);
  const wordSet = new Set<string>(wordChecked.split(''));
  const getWordComparison = useCallback(
    (wordToCheck) => {
      for (let i = 0; i < WORDLENGTH; i++) {
        if (wordChecked[i] === wordToCheck[i]) {
          wordMatchingArray[i] = LETTERSTATE.LOCATION_MATCH;
        } else if (wordSet.has(wordToCheck[i])) {
          wordMatchingArray[i] = LETTERSTATE.MATCH;
        } else {
          wordMatchingArray[i] = LETTERSTATE.UNMATCHED;
        }
      }
      return wordMatchingArray;
    },
    [wordMatchingArray, wordChecked]
  );

  return { getWordComparison };
}
