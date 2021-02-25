//variable
const nombre = document.querySelector('#name');
const email= document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');
const btnSubmit= document.querySelector('#submit');
const divError = document.querySelector('#mensaje-error');

//eventos
eventlisteners();

function eventlisteners(){  
    document.addEventListener('DOMContentLoaded', btnDisable);

    //evento para tomar los valores del formulario
nombre.addEventListener('blur', validarFormulario);
email.addEventListener('blur', validarFormulario);
mensaje.addEventListener('blur', validarFormulario);

/*
btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    mostarMensaje('Email enviado');
    formulario.reset();
})
*/

}

function btnDisable(){
  btnSubmit.disabled = true;
}
function validarFormulario(e){
    e.preventDefault();
        if(e.target.value.length > 0){
            btnSubmit.disabled = false;
        }else{
            mostarMensaje('Todos los campos son obligatorio');
        }
        if (e.target.type === 'email'){
            const er =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
            const resultado = e.target.value.indexOf('@');
            if (er.test(e.target.value)){
                mostarMensaje('el email  valido');
            }else{
                mostarMensaje('el email no es valido');
    
            }
    }
       
}
function mostarMensaje(mensaje){
    const pMensaje = document.createElement('p');
    pMensaje.textContent= mensaje;
    divError.appendChild(pMensaje)
        setTimeout(()=>{
            pMensaje.remove();
        },3000)
}

