//variable
const nombre = document.querySelector('#name');
const email= document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');

//variable of the camps 
const formulario = document.querySelector('#formulario');
const btnSubmit= document.querySelector('#submit');
const divError = document.querySelector('#mensaje_error');

const er =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

//eventos
eventlisteners();

function eventlisteners(){  
    document.addEventListener('DOMContentLoaded', btnDisable);

    //evento para tomar los valores del formulario
nombre.addEventListener('blur', validarFormulario);
email.addEventListener('blur', validarFormulario);
mensaje.addEventListener('blur', validarFormulario);
}

function btnDisable(){
  btnSubmit.disabled = true;
}
function validarFormulario(e){
    e.preventDefault();
        if(e.target.value.length > 0){
            const error = document.querySelector('p.error') ;
            if(error){
                error.remove();
            }
        }else{
            mostarMensaje('All fields are required');
        }
        if (e.target.type === 'email'){
            if (er.test(e.target.value)){

                 //delete the errors if exists
                const error = document.querySelector('p.error');
                if(error){
                    error.remove();
                }
            }else{
                mostarMensaje('the email is not valid');
    
        }
    } 
    
    if (er.test(email.value) && nombre.value !== ' ' &&  mensaje.value !== ' ' ){
        btnSubmit.disabled = false;
    }
}
function mostarMensaje(mensaje){
    const pMensaje = document.createElement('p');
    pMensaje.textContent= mensaje;
    pMensaje.className = 'error';

    const errores = document.querySelectorAll('.error');
    console.log(errores);
    if(errores.length === 0) {
        divError.appendChild(pMensaje);
    }
}

