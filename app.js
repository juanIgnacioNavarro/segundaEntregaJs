let especialidad = prompt("Elija una especialidad: cardiología, dermatología, ginecología, odontología");
let tipoConsulta = prompt("Tipo de consulta (con turno,urgencia, o apretar aceptar si desea ver todas las opciones)")
let prepaga = prompt("Filtrar por prepaga (si, no,o apretar aceptar si desea ver todas las opciones")

console.log(especialidades)

const datosBusqueda = {
  nombreEsp: especialidad,
  tipoConsulta: tipoConsulta,
  prepaga: prepaga
}

console.log(datosBusqueda)

const mostrarEspecialidad = (especialidades) => {
  especialidades.forEach((esp) => {
    console.log(
      "Nombre de la especialidad: " +
      esp.nombre +
      ", Tipo de consulta: " +
      esp.tipoDeConsulta +
      ", Recibe prepaga: " +
      esp.recibePrepaga +
      " Nombre del profesional: " + esp.nombreProfesional + ", Descripción de la especialidad: " + esp.descripcion
    );
  });
};

const noResultados = () => {
  console.log("No hay resultados para tu búsqueda");
};

const filtrarEsp = (espNombre) => {
  if (datosBusqueda.nombreEsp) {
    return espNombre.nombre === datosBusqueda.nombreEsp;
  }
  return espNombre;
};

const filtrarConsulta = (consultaCliente) => {
  if (datosBusqueda.tipoConsulta) {
    return consultaCliente.tipoDeConsulta === datosBusqueda.tipoConsulta;
  }
  return consultaCliente;
};

const filtrarPrepaga = (prepagaSiNo) => {
  if (datosBusqueda.prepaga) {
    return prepagaSiNo.recibePrepaga === datosBusqueda.prepaga;
  }
  return prepagaSiNo;
};

const filtrarProfesion = (especialidades) => {
  let resultado = especialidades.filter(filtrarEsp).filter(filtrarConsulta).filter(filtrarPrepaga)
  console.log(resultado.length);
  if (resultado.length) {
    mostrarEspecialidad(resultado);
  } else {
    noResultados();
  }
};

filtrarProfesion(especialidades)

