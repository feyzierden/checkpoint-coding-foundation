function zipStrings(strA, strB) {
  let maxLength = 0;
  let result = "";

  strA.length > strB.length
    ? (maxLength = strA.length)
    : (maxLength = strB.length);

  for (i = 0; i < maxLength; i++) {
    if (strA[i] !== undefined) {
      result += strA[i];
    }

    if (strB[i] !== undefined) {
      result += strB[i];
    }
  }

  return result;
}

// In JSBin funktionieren alle Testfälle. Hier wird der Testfall "a" "b" als Fehler dargestellt. Warum?
