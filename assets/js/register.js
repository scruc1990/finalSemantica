$(function () {
$("#formregister").on("submit", function (event) {
    if ($("#name").val() != "" && $("#email").val() != "" && $("#password").val() != "" && 
    $("#confirm-password").val() != "" && $("#identificacion").val() != "") {

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