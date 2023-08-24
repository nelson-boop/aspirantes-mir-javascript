numer=[10, 9, 8, 7, 6, 5, 4]
function max(array) {
   
      if (array.length === 0) {
        return undefined;
      }
    
   let mayor= array[0]

    for (let i = 0; i < array.length; i++) {

      if (array[i]>mayor){
            mayor=array[i]
      }
      }

      return console.log(mayor)
    }  




max(numer)