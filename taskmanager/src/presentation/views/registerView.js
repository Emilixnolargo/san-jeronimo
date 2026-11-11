/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>crear cuenta/h1>
                    <p>Regístrate para comenzar</p>
                </header>

                <form id="register-form" class="auth-form">

                   <div class="form-group">
                        <label for="registre isntitucion">
                          istitucion educativa
                        </label>

                   
                        <select
                     id="registre_institucion"
                      name="registresuinstitucion"
                      required
                      >
                       <option value="" disabled selected>
            Seleccione su institucion
        </option>

        <option value="INEDSAJE">
            inedsaje
        </option>

        <option value="Institucion 2">
            inedsalo
        </option>

        <option value="Institucion 3">
            inedsanjo
        </option>

        <option value="Institucion 4">
            ineri
        </option>

        <option value="Otra">
            Otra institucion
        </option>
    </select>
</div>
    

                    <div class="form-group">
                        <label for="register su nombre">
                            nombre
                        </label>

                        <input
                            type=""
                            id="registre su nombre"
                            name="name"
                            placeholder="tu nombre"
                            required
                        >
                    </div>

                        <div class="form-group">
                        <label for="tipo de usuario">
                            usuario
                        </label>

                           <select
                     id="tipo de usuario"
                      name="tipo de usuario"
                      required
                      >
                       <option value="" disabled selected>
            tipo de usuario
        </option>

        <option value="estudiante">
            estudiante
        </option>

        <option value="profesor">
           profesor
        </option>

       
        </option>
    </select>
</div>
    
                      

                  
                    <div class="form-group">
                        <label for="register su genero">
                            indique su genero
                        </label>

                           <select
                     id="registre su genero"
                      name="genero"
                      required
                      >
                       <option value="" disabled selected>
            Seleccione su genero
        </option>

        <option value="mujer">
            mujer
        </option>

        <option value="hombre">
           hombre
        </option>

       
        </option>
    </select>
</div>
    
                      


                
                    <div class="form-group">
                        <label for="register-email">
                            correo electronico
                        </label>

                        <input
                            type=""
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                    <div class="form-group">

    <label for="register-activo">
        Activo
    </label>

    <input
        type="checkbox"
        id="register-activo"
        name="activo"
        value="true"
        checked
    >

</div>

                    <button
                        type="submit"
                        class="button button-primary"
                    >
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            institucion: formData.get("institucion"), 
            name: formData.get("name"),
            tipodeusuario: formData.get("tipo de usuario"), 
            Genero: formData.get("genero"),
            email: formData.get("email"),
            contrasena: formData.get("contraseñssa"), 
            activo: formData.get("activo"), 
            password: formData.get("password")
        };
      
        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}