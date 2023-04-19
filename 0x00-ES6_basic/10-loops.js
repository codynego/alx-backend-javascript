export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

let arr = ['appended', 'fixed', 'displayed']
let str = 'correctly-'

console.log(appendToEachArrayValue(arr, str)
