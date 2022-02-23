import { useCallback, useState } from "react";
const wordLength = 5;

export const enum LETTERSTATE {
  MATCH = 0, UNMATCHED = -1, LOCATION_MATCH = 1
}

export default function useWordChecker(wordChecked) {
  const wordMatchingArray = new Array(wordLength).fill(-1);
  const wordSet = new Set<string>(wordChecked.split(''));
  const getWordComparison = useCallback(
    (wordToCheck) => {
      for (let i = 0; i < wordLength; i++) {
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
