
numer=[10,8,12,5]
function sum(array) {
   total=0
    for (let i = 0; i < array.length; i++) {
       total=array[i]+total
      
    }  
return console.log(total)

}

sum(numer)