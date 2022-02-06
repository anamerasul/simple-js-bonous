// for(let i=1; i<6;i++){
//                     console.log(i)
// };

function consoleNumber(i){

                    if(i>15){
                                        return;
                    }
                    console.log(i);
                    consoleNumber(i+1);
}
consoleNumber(1);

// function primeNumberfunc(numbersarry){
//  for(const primeNumber of numbersarry){


//                      if (primeNumber %2 ==1 && primeNumber %3 ==1 && primeNumber %4 ==1 &&primeNumber %5 ==1 || primeNumber %6 ==1 && primeNumber %7==1 ){
//                     let getPrimeNumber=primeNumber;
                   
//                     // return getPrimeNumber;   
//                     console.log(getPrimeNumber)             
                  
//                      }
                   

//  } 



 
// }

// const myNumbersarry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const primeNumberfuncis=primeNumberfunc(myNumbersarry);
// console.log(primeNumberfuncis);


// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,14,17,11,12,13]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numArray);