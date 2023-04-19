export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (let idx of array) {
    let index = 0;
    const value = appendString + idx;
    arr[index] = value;
    index += 1;
  }

  return arr;
}
