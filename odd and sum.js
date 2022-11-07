//print odd numbers using anonymous function
var a=function(arr){
    var result=arr.filter(element=>element%2 !=0)
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9]))


//print odd numbers using iffe function
(function (arr){
  for(let i=0;i<arr.length;i++){
      if(arr[i]%2!==0){
          console.log(arr[i]);
      }
  }
})
([1,2,3,4,5,6,7,8,9]);

 
//print sum of array using iffe function
(function (array){
    var total=0;

    for(let i=0; i<array.length;i++){
        total=total+array[i]
            console.log(total)
        }
    })
([1,2,3,4,5,6,7,8,9]) ;

 //print sum of array using anonymus function
var array=[1,2,3,4,5,6,7,8,9]
var sum=function(array){
        var total1=array.reduce((acc,cv)=>acc+cv)
            console.log(total1)
         }
 
sum(array)

