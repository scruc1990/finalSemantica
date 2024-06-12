$(function () {
    $('#inputEmail').on('input', function () {
        var email = $('#inputEmail').val();
        var emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(email)) {
            $('#inputEmail').removeClass('is-invalid');
            $('#inputEmail').addClass('is-valid');
            let user = Usuario.buscarPoremail(email);
            if (user) {
               var foto = localStorage.getItem('imageData');
               var fotoEmail = localStorage.getItem('emailFoto');

               if (fotoEmail == email) {
                    $('#logo').attr('src', foto);
                }
            }
        } else {
            $('#inputEmail').removeClass('is-valid');
            $('#inputEmail').addClass('is-invalid');
        }
    });


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
    let color=localStorage.getItem("class")||"";
    if (color!="") {
        document.body.classList.toggle(color);
        
    }
    $("#changecolor").click(function () {
        document.body.classList.toggle("white-mode");
        if($("body").hasClass("white-mode")) {
            localStorage.setItem("class","white-mode");
            
        }else{
            localStorage.setItem("class","");
        }
    })
    })