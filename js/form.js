
window.addEventListener('load', () => {
    const form = document.querySelector('#formulario');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#tel');
    const mensaje = document.querySelector('#mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validarCampos()
    });

    const validarCampos = () => {
        // Capturamos los valores ingresados por el usuario
        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const telValor = telefono.value.trim();
        const mensajeValor = mensaje.value.trim();
        
        // Validación campo nombre
        // (!nombreValor) ? console.log('campo vacio') : console.log(nombreValor)
        if (!nombreValor) {
            console.log('campo vacio');
            validarError(nombre, 'Campo vacío');
        }else {
            validarOk(nombre);
        }
        
        // Validación campo email
        if (!emailValor) {
            validarError(email, 'Campo vacío');
        } else if (!validarEmail(emailValor)) {
            validarError(email, 'El e-mail no es válido');
        } else {
            validarOk(email);
        }

        // Validación de campo teléfono
        if (!telValor) {
            validarError(telefono, 'Campo vacío');
        }else if(!validarTelefono(telValor)) {
            validarError(telefono, 'Teléfono no válido');
        } else {
            validarOk(telefono);
        }

        if (!mensajeValor) {
            console.log('campo vacio');
            validarError(mensaje, 'Campo vacío');
        }else {
            validarOk(mensaje);
        }

    }

    const validarError = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('small');
        aviso.innerText = msje;

        formControl.className = 'form-control error';
    }
    const validarOk = (input, msje) => {
        const formControl = input.parentElement;
        formControl.className = 'form-control ok';

    }


    const validarEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    const validarTelefono = (telefono) => {
        return /^(?:(?:(?:0)?11|[2368]\d)(?:(?:(?:\d{0,2})?\d{2}){2}|\d{3}(?:\d{2})?)|\d{4}(?:\d{2})?)$/.test(telefono);
    }


});