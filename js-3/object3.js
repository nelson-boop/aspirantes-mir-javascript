let receta={}

receta.nombre= "Sandwich"
receta.ingredientes=[]

receta.ingredientes.push({nombre: "Pan",
      cantidad: 2
      })

  
      
      receta.ingredientes.push({nombre: "Queso",
      cantidad: 1
      } )

      

    console.log(receta.ingredientes[0].nombre)
resultado=0
for (let i = 0; i < receta.ingredientes.length; i++) {
      
      resultado= resultado+receta.ingredientes[i].cantidad
}

console.log(resultado)