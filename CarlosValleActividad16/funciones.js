function usuario(nombre, correo, edad, comentario) {
  this.nombre = nombre;
  this.correo = correo;
  this.edad = edad;
  this.comentario = comentario;
}

let usuario1 = new usuario(
  "Carlos",
  "carlos_valle_ramirez@hotmail.com",
  "28",
  "Alcoholico rehabilitado"
);

let usuario2 = new usuario(
  "Elizabeth",
  "Queen@hotmail.com",
  "22",
  "Estudiante de Arquitectura"
);

let usuario3 = new usuario(
  "Pedro",
  "PeterParker@hotmail.com",
  "25",
  "Estudiante de Derecho"
);

const datos = [usuario1, usuario2, usuario3];

console.table(datos);
