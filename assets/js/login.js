$(function () {
    $("#formlogin").on("submit", function (event) {
        event.preventDefault();
        if ($("#inputEmail").val() != "" && $("#inputPassword").val() != "" ) {
            let us=Usuario.buscarPoremail($("#inputEmail").val())
            if (us.contrasena===$("#inputPassword").val()) {
                alert("bienvenido")
                window.location="./index.html"
                let aux=new Usuario(us.id, us.nombre, us.email, "", us.contrasena, "", "","si")
                aux.setUserLogin()
                
            } else {
                alert("contraseña incorrecta")
            }

        }else{
        alert("los campos no pueden estar vacios")
        }
    });
    })