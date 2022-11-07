//  find duplicates 
  const arry = [1, 2, 1, 3, 4, 3, 5];
 const dup = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
 const duplicateElements = dup(arry);
 console.log(duplicateElements);


//find duplicates iffe
 (function(dub){
    dub= arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = dup(arry);
console.log(duplicateElements);
});
([1, 2, 1, 3, 4, 3, 5])
