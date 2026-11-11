/*
 * User Entity
 *
 * Representa un usuario dentro del dominio
 * de la aplicación.
 *
 * Esta clase NO sabe:
 * - cómo se guarda el usuario
 * - dónde se guarda
 * - cómo funciona Firestore
 * - cómo funciona LocalStorage
 * - cómo funciona la interfaz
 */

export class User {

    constructor({
        id = null,
        institucion,
        name,
        tipodeusuario,
        genero,
        email,
        contraseña,
        activo,
        passwordHash = null
    }) {
        this.id = id;
        this.institucion= institucion;
        this.name = name;
        this.tipodeusuario = tipodeusuario;
        this.genero = genero;
        this.email = email;
        this.contrasena = contrasena;
        this.activo = activo;
        this.passwordHash = passwordHash;
    }

}