/**
 * create function that will return only the even numbers
 *
 * return the sum of even numbers
 */

// function evenNemberOnly(numbers) {
//   let a = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       //console.log(number);
//       a.push(number);
//     }
//   }
//   //console.log(a);
//   return a;
// }
// const a =evenNemberOnly([1, 3, 4, 6, 8, 2, 5]);
// console.log(a);



function sumOfEvenNumbers(numbers){

  let sum = 0;
  for(const number of numbers){
    if(number%2===0){
      //console.log(number);
      sum = sum + number;
    }
  }//console.log('the total sum is:',sum);
   return sum;
}
const sum =sumOfEvenNumbers([1,2,3,4,5,6,7,8,9,10]);
console.log('the total sum is:',sum);