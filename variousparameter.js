/**
 *         //most important thing: 
 *         split means alada kora 
 * 
 * 
 * 
 * 
 * 
 * for a given string tell me whether it has even number of characters or not
 *
 */
// function evenSizedString(str){
//     const size = str.length;
//     if(size%2===0){
//         console.log('even size');
//         return true;

//     }
//     else{
//         console.log('odd size');
//         return false;

//     }
//     console.log(size);
//     console.log(str);
// }

// evenSizedString('Dhaka');
// evenSizedString('Daka');

// function doubleOrTriple(number,doDouble){
//     if(doDouble===true){
//         const result = number * 2;
//         return  result;
//     }
//     else{
//         const result= number * 3;
//         return result;
//     }
// }

// //console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(5,false));

// function count_zero(number, size) {
//   const len = number.length;
//   console.log("the length is:", len);

//   let sum = 0;
//   for (const num of number) {
//     console.log(num);
//     sum = sum + num;
//   }
//   //console.log('the total is:',sum);
//   let average = sum / len;
//   //   console.log(average)
//   return average;

// }

// let average = count_zero([1, 2, 3, 4, 5]);
// console.log("The average is:", average);

//console.log('the average is:',average);

// function count_zero(binary) {
//   let splited = binary.toString().split("");
//   let countZero = 0;
//   for (const zero of splited) {
//     if (zero == 0) {
//       countZero = countZero + 1;
//     }
//   }

//   return countZero;
// }
// let zero = count_zero(10001010101);
// console.log(zero);






function countZero(binary) {
    // Convert the number to a string and then count '0' directly
    const countZero = binary.toString().split('0').length - 1;
    return countZero;
}

let zero = countZero(10001010101);
console.log(zero);

