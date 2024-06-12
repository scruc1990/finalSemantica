function session () {
    let user=Usuario.getUsuarioLogin();

    if (user.length == 0 || user == []) {
        $("#sesion").empty();
        $("#sesion").append(`
        <button type="button" id="btnlogin" class="btn btn-outline-light me-2" >Iniciar Sesion</button>
        <button type="button" id="btnregister" class="btn btn-warning" >Registrarse</button>`) 
    }

    if (user != [] && user?.length != 0) {
        $("#sesion").empty();
        $("#sesion").append(`
        <button type="button" id="btnhome" class="btn btn-outline-light me-2">Home</button>
        <button type="button" id="btncerrar" class="btn btn-warning">Cerrar Sesion</button>`)
        
    }
}
$(function () {
    session();
    $('#btncerrar').click(function (e) {
        e.preventDefault();
        Usuario.logout();
        window.location="./index.html"
        session();
    });

    $('#btnlogin').click(function (e) {
        e.preventDefault();
        window.location="./login.html"
    });

    $('#btnregister').click(function (e) {
        e.preventDefault();
        window.location="./registro.html"
    });

    $('#btnhome').click(function (e) {
        e.preventDefault();
        window.location="./index.html"
    });
 
    var user = Usuario.getUsuarioLogin();
    if (user.length == 0 || user == []) {
        window.location = "./index.html";
    }
    let emailFoto = localStorage.getItem('emailFoto');
    if (emailFoto == user.email) {
        var foto = localStorage.getItem('imageData');
        if (foto) {
            $('#logo').attr('src', foto);
        }
    }

   $('#inputName').val(user.nombre);
    $('#inputLastName').val(user.apellido);
    $('#inputEmail').val(user.email);
    $('#fileInput').on('change', function (e) {
        e.preventDefault();
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function (e) {
            localStorage.setItem('imageData', e.target.result);
            $('#logo').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    });

    $('#inputEmail').on('input', function (e) {
        var email = $('#inputEmail').val();
        var emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(email)) {
            $('#inputEmail').removeClass('is-invalid');
            $('#inputEmail').addClass('is-valid');
        } else {
            $('#inputEmail').removeClass('is-valid');
            $('#inputEmail').addClass('is-invalid');
        }
    });

    $('#antPassword').on('change', function (e) {
        e.preventDefault();

        if ($('#antPassword').val() != user.password) {
            $('#antPassword').addClass('is-invalid');
            $('#antPassword').removeClass('is-valid');
        } else {
            $('#antPassword').addClass('is-valid');
            $('#antPassword').removeClass('is-invalid');
        }
    });

    $('#newPassword').on('change', function (e) {
        e.preventDefault();
        if ($('#newPassword').val().length < 8) {
            $('#newPassword').addClass('is-invalid');
            $('#newPassword').removeClass('is-valid');
        } else {
            $('#newPassword').addClass('is-valid');
            $('#newPassword').removeClass('is-invalid');
        }
    });

    $('#newPassword2').on('change', function (e) {
        e.preventDefault();
        if ($('#newPassword2').val() != $('#newPassword').val()) {
            $('#newPassword2').addClass('is-invalid');
            $('#newPassword2').removeClass('is-valid');
        }
        else {
            $('#newPassword2').addClass('is-valid');
            $('#newPassword2').removeClass('is-invalid');
        }
    }
    );

    $('#formperfil').submit(function (e) {
        e.preventDefault();
        if ($('#antPassword').val() != user.password) {
            $('#antPassword').addClass('is-invalid');
            $('#antPassword').removeClass('is-valid');
        } else {
            $('#antPassword').addClass('is-valid');
            $('#antPassword').removeClass('is-invalid');
        }

        if ($('#newPassword').val().length < 8) {
            $('#newPassword').addClass('is-invalid');
            $('#newPassword').removeClass('is-valid');
        } else {
            $('#newPassword').addClass('is-valid');
            $('#newPassword').removeClass('is-invalid');
        }

        if ($('#newPassword2').val() != $('#newPassword').val()) {
            $('#newPassword2').addClass('is-invalid');
            $('#newPassword2').removeClass('is-valid');
        }
        else {
            $('#newPassword2').addClass('is-valid');
            $('#newPassword2').removeClass('is-invalid');
        }

        if ($('#antPassword').hasClass('is-valid') && $('#newPassword').hasClass('is-valid') && $('#newPassword2').hasClass('is-valid')) {
            localStorage.setItem('emailFoto', $('#inputEmail').val());
            Usuario.actualizarUsuario(user.id, $('#inputName').val(), $('#inputLastName').val(), $('#inputEmail').val(), $('#newPassword').val());
            alert('Usuario actualizado');
            window.location = "./index.html";
        }
    }
    );
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
