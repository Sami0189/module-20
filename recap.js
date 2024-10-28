function add(price1,price2){
    const total = price1 + price2;
    return total;
}
 add(5,80);//ata lakba na just bojar jonno lakchi
const bill = add(5,80);
console.log(bill);



function add2(price1,price2){
    return price1 + price2;
}add2(5,80);//ata lakba na just bojar jonno lakchi
const bill1 =add2(5,80);
console.log(bill1,bill)



function doMath(num1,num2,num3){
    const sum = num1 + num2 + num3;
    const diff=num1 - num2 - num3;
    const mult =num1*num2*num3;
    const result = mult / 2;
    return sum;
}doMath(5,10,15);//ata lakba na just bojar jonno lakchi

const all = doMath(5,10,15);
console.log('the total amount is:',all);



