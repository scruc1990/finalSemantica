function session () {
    let user=Usuario.getUsuarioLogin();
    console.log(user.length);
    if (user.length == 0 || user == []) {
        $("#sesion").empty();
        $("#sesion").append(`
        <button type="button" id="btnlogin" class="btn btn-outline-light me-2" >Iniciar Sesion</button>
        <button type="button" id="btnregister" class="btn btn-warning" >Registrarse</button>`) 
    }
    console.log(user != [], user);
    if (user != [] && user?.length != 0) {
        $("#sesion").empty();
        $("#sesion").append(`
        <button type="button" id="btnperfil" class="btn btn-outline-light me-2">Perfil</button>
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

    $('#btnperfil').click(function (e) {
        e.preventDefault();
        window.location="./perfil.html"
    });
})
