const jsonld = {
  "@context": {
    "@vocab": "http://schema.org/",
    "DATE": "http://schema.org/Date",
    "Hora en que se le vio por ultima vez": "http://schema.org/Time",
    "Pais en que se le vio por ultima vez": "http://schema.org/Country",
    "STATE": "http://schema.org/State",
    "Municipio en que se le vio por ultima vez": "http://schema.org/AdministrativeArea",
    "Localidad en que se le vio por ultima vez": "http://schema.org/Locality",
    "Nacionalidad": "http://schema.org/Nationality",
    "Estatura": "http://schema.org/QuantitativeValue",
    "COMPLEXION": "http://schema.org/Text",
    "GENDER": "http://schema.org/GenderType",
    "Edad": "http://schema.org/Integer",
    "Descripcion de senas particulares": "http://schema.org/Text",
    "Etnia": "http://schema.org/Text",
    "Discapacidad": "http://schema.org/Text",
    "Dependencia que envio la informacion": "http://schema.org/Organization"
  },
  
  "vocab": "Schema.org",
  "DATE": "2012-03-18 ",
  "Hora en que se le vio por ultima vez": "05:00:00 ",
  "Pais en que se le vio por ultima vez": "MEXICO ",
  "STATE": "SONORA",
  "Municipio en que se le vio por ultima vez": "NAVOJOA ",
  "Localidad en que se le vio por ultima vez": "NAVOJOA ",
  "Nacionalidad": "MEXICANA ",
  "Estatura": "1.1  ",
  "COMPLEXION": "DELGADA  ",
  "GENDER": "MUJER  ",
  "Edad": "7  ",
  "Descripcion de senas particulares": "TIENE UNA CICATRIZ EN LA RODILLA IZQUIERDA POR UNA CAIDA TIPO RASPON  ",
  "Etnia": "NO ESPECIFICADO ",
  "Discapacidad": "NINGUNO  ",
  "Dependencia que envio la informacion": "FGE - SONORA "
};

function crearTablaFromJSONLD(jsonldData) {
  var tabla = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");

  // Obtener el contexto del JSON-LD
  var context = jsonldData["@context"];
  delete jsonldData["@context"]; // Eliminar el contexto del objeto de datos

  // Crear los encabezados de la tabla a partir del contexto
  var enca = [' Schema ', ' DATE ', ' TIME ', ' COUNTRY ', ' STATE ', ' AREA ', ' LOCALITY ', ' NATIONALITY ', ' HEIGHT ', ' COMPLEXION ', ' GENDER ', ' AGE ', ' DESCRIPTION ', ' ETNIA ', ' DISCAPACITY ', ' DEPENDENCY '];
  var encabezados = Object.values(enca);
  var encabezadosRow = document.createElement("tr");
  encabezados.forEach(function(encabezado) {
    var th = document.createElement("th");
    th.textContent = encabezado;
    encabezadosRow.appendChild(th);
  });
  thead.appendChild(encabezadosRow);

  // Crear las filas de datos
  var datos = Object.values(jsonldData);
  var datosRow = document.createElement("tr");
  datos.forEach(function(dato) {
    var td = document.createElement("td");
    td.textContent = dato;
    datosRow.appendChild(td);
  });
  tbody.appendChild(datosRow);

  // Agregar encabezados y datos a la tabla
  tabla.appendChild(thead);
  tabla.appendChild(tbody);

  return tabla;
}

// Obtener el elemento contenedor donde se mostrará la tabla
var contenedorTabla = document.getElementById("miContenedorTabla");

// Crear la tabla a partir del JSON-LD y agregarla al contenedor
var tablaGenerada = crearTablaFromJSONLD(jsonld);
contenedorTabla.appendChild(tablaGenerada);
