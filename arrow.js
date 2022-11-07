//1.print odd numbers using arrow function
var odd=(arr)=>{
    for(let i=0;i<arr.length;i++){           
     if(arr[i] %2 !=0){
    console.log(arr[i])
     }
        }
     }
    
    odd([1,2,3,4,5,6,7,8,9]);

     //2.print sum of array using arrow function

var sum= (array)=>{//sum of arrays
    var total=0;
    for(let i=0; i<array.length;i++){
        total=total+array[i]
            console.log(total)
        }
    }
sum([1,2,3,4,5,6,7,8,9]) ;


//3. title caps in array using arrow function
titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}            
console.log(titleCase("good morning"))
//4.palindrome using arrow function
var Palindrome = (arr) =>
    {
              for (let i = 0; i < arr; i++)
        {
            let ans = arr.split("");
            let c=ans.reverse("");
            let arr=c.join("")
                    }
        return arr;
    }
    console.log(Palindrome(["madam","civic","did"]))

//5.print prime number in an  array using arrow function
const newArray = [1, 3, 2, 5,13,17,19, 10];
 const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
      const myPrimeArray = newArray.filter(element => isPrime(element));
  console.log(myPrimeArray);

    