const details = {
    name:"aishu",
    id:1,
    age: 22,
    email:"aishu.ramki22@gmail.com",
    displays : function(){
        console.log(this.age   , this.email)

    }
}


// const {name,age} = details
// console.log({age,name})


// function display(){
//     const {name,age,email,id} = details
//     console.log({name,age,id,email})
// }

details.displays()