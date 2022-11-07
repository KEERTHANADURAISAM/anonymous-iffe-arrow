 //print prime number in an  array using iffe function
 (function (array){
  for(let i=0; i<Math.sqrt(array[i]);i++){
if(array[i]%2==1){
console.log(array[i])
}
    }
})
([1,13,15,17,19,18,4,6,8]);

//print prime number in an  array using anonymus function  
num=[31,3,7,8,9,6,13,15,17,]
function isprime(num){
  for(i=2;i<num;i++){
  if(num % i===0){
  return false;
}
return true;
}
}
const myprime=num.filter(element=>isprime(element));
console.log(myprime)

