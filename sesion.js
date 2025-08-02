//  class sesion{
//     constructor(userName = '', gmail = '', password = ''){
//         this.userName =  userName
//         this.gmail =  gmail;
//         this.password =  password;
//     } 

//     //metodos  o acciones

//     pymant() {
//         console.log("Hola")
//     }

// } 


// class Pay extends sesion {
//     constructor(userName){
//         super(userName)
//     }
//     startPaymant(){
//         super.pymant();
//     }
// }




function busquedaBinaria(arr, target){
    let start = 0
    let end = arr.length - 1
    while(start <= end){
        let middle = Math.floor((start + end)/2)
        if (arr[middle] === target) {
            return middle;
        }else if(arr[middle] < target){
            start = middle + 1
        }else{
            end = middle - 
        }
    }
    return -1
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const result = busquedaBinaria(numbers,11)
console.log(result)