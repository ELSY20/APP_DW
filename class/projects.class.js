
// Clase Proyecto
class Proyecto {
    constructor(codigo, fecha, nombre, tipo, descripcion) {
      this.codigo = codigo;
      this.fecha = fecha;
      this.nombre = nombre;
      this.tipo = tipo;
      this.descripcion = descripcion;
    }
  
    getCodigo() {
      return this.codigo;
    }
  
    getFecha() {
      return this.fecha;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    getTipo() {
      return this.tipo;
    }
  
    getDescripcion() {
      return this.descripcion;
    }
  
    setCodigo(codigo) {
      this.codigo = codigo;
    }
  
    setFecha(fecha) {
      this.fecha = fecha;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setTipo(tipo) {
      this.tipo = tipo;
    }
  
    setDescripcion(descripcion) {
      this.descripcion = descripcion;
    }
  
    toJSON() {
      return {
        codigo: this.codigo,
        fecha: this.fecha,
        nombre: this.nombre,
        tipo: this.tipo,
        descripcion: this.descripcion
      };
    }
  }
  