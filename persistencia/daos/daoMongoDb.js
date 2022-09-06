import contenedorMongoDb from "../contenedores/contenedorMongoDb.js";



class DaoMongoDb extends contenedorMongoDb {

    constructor() {
        super('usuariosRegistrados', {
            nombre: { type: String, required: true },
            contraseña: { type: String, required: true },
            cantidad: { type: Array, required: true},
            telefono: { type: Number, required: true},
            email: { type: String, required: true},
            direccion: { type: String, required: true},
            edad: { type: Number, required: true},
            foto: { type: String, required: true},
            mayoriaDeEdad: { type: Number, required: true}
        })
        this.edad > 18 ? this.mayoriaDeEdad = 1 : this.mayoriaDeEdad = 0;
    }
    
}

export default DaoMongoDb;