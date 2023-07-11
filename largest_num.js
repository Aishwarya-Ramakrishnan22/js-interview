const arr = [11, 2, 3, 45, 59, 65, 7];
let output = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < output) {
    output = arr[i];
  }
}
console.log(output);
