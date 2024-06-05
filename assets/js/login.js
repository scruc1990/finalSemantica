$(function () {
    $("#formlogin").on("submit", function (event) {
        if ($("#email").val() != "" && $("#password").val() != "" ) {
            
            let us=Usuario.buscarPoremail($("#email").val())
            if (us.contrasena===$("#password").val()) {
                alert("bienvenido")
                window.location="./index.html"
                let aux=new Usuario(us.id, us.nombre, us.email, "", us.contrasena, "", "","si")
                aux.modificar()
                
            }

        }else{
        alert("los campos no pueden estar vacios")
        }
    
        //$( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
        event.preventDefault();
    });
    })