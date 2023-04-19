export default function concatArrays(array1, array2, string) {
  const stringArray = Array.from(string);
  const newArray = [...array1, ...array2, ...stringArray];

  return newArray;
}
