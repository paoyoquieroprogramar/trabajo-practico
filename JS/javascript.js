

(function () {
    var formulario = document.getElementsByName("formulario")[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e) {
        if (formulario.nombre.value == 0) {
            alert("completa el campo de nombre");
            e.preventDefault();
        }
    };
    var validarApellido = function(e) {
        if (formulario.apellido.value == 0) {
            alert("complete el campo apellido");
            e.preventDefault();
        }
    };
    var validarMail = function(e) {
        if (formulario.mail.value == 0) {
            alert("complete el campo mail");
            e.preventDefault();
        }

    };
    var validarPago = function(e) {
        if (!document.querySelector('input[name="pago"]:checked')) {
            alert("elige un medio de pago");
            e.preventDefault();
        }
    };


    var validar = function(e) {
        validarNombre(e);
        validarApellido(e);
        validarMail(e);
        validarPago(e);
    };
    formulario.addEventListener("submit", validar);

}())


