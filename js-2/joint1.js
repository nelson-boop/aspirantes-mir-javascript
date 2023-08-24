
let array=["aprender","haciendo","codigo"]

function joint1(array) {
      let result= '';
      for (let i = 0; i < array.length; i++) {
        result = result + array[i];
        if (i < array.length - 1) {
          result = result+' ';
        }
      }
      return console.log(result);
    }
     
joint1(array) 