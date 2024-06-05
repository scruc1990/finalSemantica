$("#btnhome").click(function () {
    window.location = "./index.html";
})
$("#btnregister").click(function () {
    window.location = "./registro.html";
})
$("#btnlogin").click(function () {
    window.location = "./login.html";
})
$('#btncerrar').click(function () {
    let us=Usuario.buscarPorlogin("si");
    let aux=new Usuario(us.id, us.nombre, us.email, "", us.contrasena, "", "","no")
    aux.modificar()
    window.location="./index.html";
    
});
$('#btnperfil').click(function () {

    window.location="./perfil.html";
    
});