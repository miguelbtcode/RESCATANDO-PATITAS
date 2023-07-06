const fromDb = undefined;

var HTMLasunto = document.getElementById("txtAsunto");
var HTMLcorreo = document.getElementById("txtCorreo");
var HTMLmensaje = document.getElementById("txtArMensaje");
var HTMLcontador = document.getElementById("ctMensaje");

var asunto = '';
var correo = '';
var mensaje = '';
var contador = 0;

function ValidarCorreo()
{
    //  Validar texto en Asunto
    if (asunto.length <= 0)
    {
        alert("Ingresar asunto a enviar.");
    }
    //  Validar texto en Asunto
    else if (correo.length <= 0)
    {
        alert("Ingresar correo a enviar.");
    }
    //  Validar formato de email en Correo
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo))
    {
        alert("Ingresar un correo válido.")
    }
    //  Validar texto en Mensaje
    else if (mensaje.length <= 0)
    {
        alert("Ingresar mensaje a enviar.");
    }
    else if (300 < mensaje.length)
    {
        alert("Ingresar mensaje menor o igual a 300 caracteres.");
    }
}

function ContadorDeMensaje()
{
    var contadorFinal = "";
    contadorFinal += mensaje.length;
    contadorFinal += "/300";

    contador = contadorFinal;
}

mensaje.onkeyup = ContadorDeMensaje();