
$(function () {
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
})
