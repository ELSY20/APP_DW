window.onload = function () {
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    capturarDatos();
  });
};

let ArrayProyectos = [];

function agregarProyecto(nuevoProyecto) {
  ArrayProyectos.push(nuevoProyecto);
  llenaTabla();
}

function llenaTabla() {
  let tabla = document.getElementById("table_body");
  tabla.innerHTML = "";
  let template;
  ArrayProyectos.forEach(function (proyecto) {
    template += `<tr>
      <td>${proyecto.codigo}</td>            
      <td>${proyecto.fecha}</td>
      <td>${proyecto.nombre}</td>
      <td>${proyecto.tipo}</td>
      <td>${proyecto.descripcion}</td>
      <td>
        <button class="btn btn-danger" onclick="eliminarProyecto(${proyecto.codigo})">Eliminar</button>
        <button class="btn btn-info" onclick="editarProyecto(${proyecto.codigo})">Editar</button>
      </td>
    </tr>`;
  });

  tabla.innerHTML += template;
}

function eliminarProyecto(codigo) {
  ArrayProyectos = ArrayProyectos.filter(function (proyecto) {
    return proyecto.codigo !== codigo;
  });
  llenaTabla();
}

function editarProyecto(codigo) {
  let proyecto = ArrayProyectos.find(function (proyecto) {
    return proyecto.codigo === codigo;
  });

  let index = ArrayProyectos.indexOf(proyecto);

  let nombre = prompt("Ingrese el nuevo nombre");
  let tipo = prompt("Ingrese el nuevo tipo");
  let descripcion = prompt("Ingrese la nueva descripcion");
  let fecha = prompt("Ingrese la nueva fecha con el formato yyyy-mm-dd");

  let arrayObjeto = {
    codigo: codigo,
    fecha: fecha,
    nombre: nombre,
    tipo: tipo,
    descripcion: descripcion,
  };

  if (validarProyecto(arrayObjeto)) {
    ArrayProyectos[index] = arrayObjeto;
    llenaTabla();
  } else {
    return false;
  }
}

function capturarDatos() {
  var codigoCapturado = parseInt(document.getElementById("codigo").value);
  var fechaCapturado = document.getElementById("fecha").value;
  var nombreCapturado = document.getElementById("nombre").value;
  var tipoCapturado = document.getElementById("tipo").value;
  var descripcionCapturado = document.getElementById("descripcion").value;

  let NuevoArray = {
    codigo: codigoCapturado,
    fecha: fechaCapturado,
    nombre: nombreCapturado,
    tipo: tipoCapturado,
    descripcion: descripcionCapturado,
  };


  if (validarProyecto(NuevoArray) && validarCodigo(codigoCapturado)) {
    agregarProyecto(NuevoArray);
  } else {
    return false;
  }
}

validarProyecto = function (proyecto) {
  let valido = true;

  let regexFecha =
    /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  let regexNumero = /^[0-9]+$/;

  if (!regexFecha.test(proyecto.fecha)) {
    valido = false;
    alert("Fecha no valida");
  }
  if (!regexNumero.test(proyecto.codigo)) {
    valido = false;
    alert("Codigo no valido");
  }

  return valido;
};

validarCodigo = function (codigo) {
  let valido = true;
  ArrayProyectos.forEach(function (proyecto) {
    if (proyecto.codigo === codigo) {
      valido = false;
      alert("Codigo ya existe");
    }
  });
  return valido;
};
