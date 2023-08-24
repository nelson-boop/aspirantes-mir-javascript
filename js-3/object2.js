let persona={
      nombre:"nelson",
      edad:42,
      ciudad:"duitama",
      profesion:"ingeniero"
}


console.log(persona)


function presentacion(persona) {
      return "hola mi nombre es "+persona.nombre+"vivo en la ciudad de " + persona.ciudad+"soy "+persona.profesion
      
}

mensaje= presentacion(persona)

console.log(mensaje)

persona.hobbies=["nadar","leer","cantar"]

console.log(persona.hobbies)

for (const key in persona) {
      console.log(key +":"+ persona[key])
}