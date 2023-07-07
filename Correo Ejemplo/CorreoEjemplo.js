//  Obtener el elemento HTML
let persona = document.getElementById('txtPersona');
let correo = document.getElementById('txtCorreo');

function ValidarCorreo()
{
    //  Validar texto en Asunto
    if (persona.value.length <= 0)
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
    return true;
}

function EnviarGmail()
{
    //  Comprobar validez de correo
    if (ValidarCorreo())
    {
        //  Enlace para abrir Gmail
        var mailTo = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=";
        //  Añadir correo destinatario
        mailTo += "mauriojedagb47@gmail.com";
        //  Añadir asunto
        mailTo += "&su=";
        mailTo += "RESCATANDO PATITAS - Atención de duda a cliente";
        //  Añadir cuerpo
        mailTo += "&body=";
        mailTo += "Solicitud a pedido de ";
        mailTo += persona.value;
        mailTo += " con el siguiente correo: ";
        mailTo += correo.value;
        mailTo += ". Puede detallar su consulta luego de este texto:"
        window.location.href = mailTo;
    }
}