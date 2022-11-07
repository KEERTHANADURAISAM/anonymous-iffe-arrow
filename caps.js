// title caps in array using anonymous function
 var caps=function (str) {
   str=str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}
console.log(caps("world is beautiful"));


// title caps in array using iffe function

(function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   
  } 
  console.log(str.join(""))
})
("ALL THE BEST");

 