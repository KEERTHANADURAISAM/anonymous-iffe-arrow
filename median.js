// find median using iffe function
(function (nums) {
     const mid = Math.floor(arr.length / 2),
       nums = [...arr].sort((a, b) => a - b);
     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
   });
   nums([5, 6, 50, 1, -5]);
   nums([1, 2, 3, 4, 5]);



 var arr=[6,7,8,9,10,4]
var arr1=[7,5,4,8,68,]
function median1(arr,arr1){
    var c=arr.concat(arr1)
    console.log(c);
var arrsort=c.sort((a,b)=>(a-b))
console.log(arrsort)
 var len=arrsort.length
console.log(len)
 if(len%2!=0){
 var res=arrsort(Math.floor((length/2)))
 console.log(res)
 }
else{
     var res=math.floor((arrsort[length/2]+arrsort[length/2-1]/2))
     console.log(res)
    
 }
}
median1(arr,arr1)



