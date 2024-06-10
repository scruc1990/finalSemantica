$(function () {
$('#foto').hide();
$('#foto').on('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var imgData = e.target.result;

        localStorage.setItem('imageData', imgData);
        localStorage.setItem('emailFoto', $('#email').val());
        $('#logo').attr('src', imgData);
    };
    reader.readAsDataURL(file);
});

$('#email').on('input', function (e) {
    var email = $('#email').val();
    var emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
        $('#email').removeClass('is-invalid');
        $('#email').addClass('is-valid');
        $('#foto').show();
    } else {
        $('#email').removeClass('is-valid');
        $('#email').addClass('is-invalid');
        $('#foto').hide();
    }
});

$('#password').on('change', function (e) {
    e.preventDefault();
    if ($('#password').val().length < 8) {
        $('#password').addClass('is-invalid');
        $('#password').removeClass('is-valid');
    } else {
        $('#password').addClass('is-valid');
        $('#password').removeClass('is-invalid');
    }
});

$('#confirm-password').on('change', function (e) {
    e.preventDefault();
    if ($('#confirm-password').val() != $('#password').val()) {
        $('#confirm-password').addClass('is-invalid');
        $('#confirm-password').removeClass('is-valid');
    }
    else {
        $('#confirm-password').addClass('is-valid');
        $('#confirm-password').removeClass('is-invalid');
    }
}
);

$("#formregister").on("submit", function (event) {
    if ($("#name").val() != "" && $("#email").val() != "" && $("#password").val() != "" && 
    $("#confirm-password").val() != "" && $("#identificacion").val() != ""
        && $("#foto").val() != "" && $('#confirm-password').hasClass('is-valid') 
        && $('#password').hasClass('is-valid')) {

        if ($("#confirm-password").val()===$("#password").val()) {
            let id=$("#identificacion").val();
            let nombre=$("#name").val();
            let email=$("#email").val();
            let contrasena=$("#password").val();

            let usuario=new Usuario(id, nombre, email, "", contrasena, "", "","no");  
            usuario.guardar();  
            window.location="./login.html";
        }else{
            alert("las contraseña debe coincidir")
        }

    }else{
    alert("los campos no pueden estar vacios")
    }

    event.preventDefault();
});
})