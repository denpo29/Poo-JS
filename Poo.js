class Estudiante{
    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas = ["JavaScript", "HTML", "CSS"]
    }
    obtenDatos(){
        const obj = {
            nombre: this.nombre,
            materias: this.asignaturas,
        }
        return obj
    }
}

const estudiante1 = new Estudiante("Alejandro", this.asignaturas)

datos = estudiante1.obtenDatos()

console.log(datos)