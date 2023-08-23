
function suma(num) {
if (num<=0) {
    return console.log("el numero no es positivo o es cero")
}
  

    let total=0
    for (let index = 1; index <=num; index++) {
       total=total+index         
    }

    console.log(total)
}

suma(10)