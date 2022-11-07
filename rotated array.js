//Q.Rotate an array by K times
var a=[5,4,3,6,7,8,9]
function reverse(a , li , ri){
 while(li < ri){
      var temp= a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
}
//Anonymous function : 
var m=function(a , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          }
                          

                          
//    IIFE :
   (function(a , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          });
                          ([1,2,3,4] , 2)
                          