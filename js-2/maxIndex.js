numer=[10, 9, 8, 7, 6, 5, 4]
function maxIndex(array) {

      let mayor= array[0]
    let  maxIndex=0
      for (let i = 0; i < array.length; i++) {
  
        if (array[i]>mayor){
              mayor=array[i]
              maxIndex=i
        }
        }
  
        return console.log(maxIndex)
      }  
  
  
  
  
      maxIndex(numer)
      
