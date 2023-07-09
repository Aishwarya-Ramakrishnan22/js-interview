const val = "a1b2c3d4e5"
let nums = []   //1 3 5
let chars = []  //0 2 4

// this checks for the variable length and increases by +1 till the length of VAl
for(let i=0; i<val.length ; i++){
// checks even condition and pushes the val[i] which is even to chars array
    if (i%2==0){
        chars.push(val[i])
        
    }
// else it goes to the nums array
    else{
        nums.push(val[i])
    }
}

let output = ""
for (let temp = 0; temp < nums.length; temp++){ // temp = 1
    for(let i =0; i < nums[temp] ; i++){ //nums[1] = 4
        output+=chars[temp]    //chars[1] = d confusion ah iruku 
    }
}
console.log(output)