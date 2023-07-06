//  Obtener el elemento HTML
let asunto = document.getElementById('txtAsunto');
let correo = document.getElementById('txtCorreo');
let mensaje = document.getElementById('txtArMensaje');
let contador = document.getElementById('ctMensaje');

function ValidarCorreo()
{
    //  Validar texto en Asunto
    if (asunto.value.length <= 0)
    {
        alert("Ingresar asunto a enviar.");
        return false;
    }
    //  Validar texto en Asunto
    else if (correo.value.length <= 0)
    {
        alert("Ingresar correo a enviar.");
        return false;
    }
    //  Validar formato de email en Correo
    else if (!correo.value.indexOf('@gmail.com'))
    {
        alert("Ingresar un correo válido.")
        return false;
    }
    //  Validar texto en Mensaje (0 a 300 caracteres)
    else if (mensaje.value.length <= 0)
    {
        alert("Ingresar mensaje a enviar.");
        return false;
    }
    else if (300 < mensaje.value.length)
    {
        alert("Ingresar mensaje menor o igual a 300 caracteres.");
        return false;
    }
    return true;
}

//  Contar caracteres del mensaje
function ContadorDeMensaje()
{
    var contadorFinal = "";
    //  Contador de mensaje
    contadorFinal += mensaje.value.length;
    //  Límite
    contadorFinal += "/300";
    //  Resultado
    contador.value = contadorFinal;
}

function EnviarGmail()
{
    if (ValidarCorreo())
    {
        var mailTo = "mailto:";
        //  Añadir correo destinatario
        mailTo += correo.value;
        //  Añadir asunto
        mailTo += "?subject=";
        mailTo += asunto.value;
        //  Añadir cuerpo
        mailTo += "&body=";
        mailTo += mensaje.value;
        window.location.href = mailTo;
    }
}

//  Actualizar contador al colocar mensaje
mensaje.addEventListener('keypress', ContadorDeMensaje);
mensaje.addEventListener('keyup', ContadorDeMensaje);