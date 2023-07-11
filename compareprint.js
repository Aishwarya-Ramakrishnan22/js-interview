const arr = [1, 2, 3, 4, 5];
let op = [];

// for(let i=arr.length-1;i>=0;i--){
//     arr1.push(arr[i])

// }
// console.log(arr.includes("hi"))

// count=0
// while (count<arr.length){
//     arr1.push(arr[count]*3)
//     count+=1
// }
// for(let i=0;i<arr.length;i++){
//     arr1.push(arr[i]*3)
// }
// console.log(arr1)
// let op =0

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == arr[i]) {
      console.log("same");
    } else {
      op1 = arr[i] * arr[j];
      op.push(op1)
    }
}
}
console.log(op);
