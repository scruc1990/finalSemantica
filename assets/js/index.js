
$(function () {
    $("#ahamburguesa").click(function () {
        $("#hamburguesa").removeClass("d-none")
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#aperro").click(function () {
        $("#perro").removeClass("d-none")
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#aperra").click(function () {
        $("#perra").removeClass("d-none")
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#perro").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#asalchipapa").click(function () {
        $("#salchipapa").removeClass("d-none")
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#achoripan").click(function () {
        $("#choripan").removeClass("d-none")
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#apizza").click(function () {
        $("#pizza").removeClass("d-none")
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#bebida").addClass("d-none")
    })
    $("#abebida").click(function () {
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#bebida").removeClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#achoripapa").click(function () {
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#choripapa").removeClass("d-none")
        $("#mandipollo").addClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#amandipollo").click(function () {
        $("#salsa").removeClass("d-none")
        $("#snack").removeClass("d-none")
        $("#mandipollo").removeClass("d-none")
        $("#choripapa").addClass("d-none")
        $("#perro").addClass("d-none")
        $("#perra").addClass("d-none")
        $("#salchipapa").addClass("d-none")
        $("#choripan").addClass("d-none")
        $("#hamburguesa").addClass("d-none")
        $("#bebida").addClass("d-none")
        $("#pizza").addClass("d-none")
    })
    $("#todos").click(function () {
        $("#salsa").addClass("d-none")
        $("#snack").addClass("d-none")
        $("#bebida").removeClass("d-none")
        $("#mandipollo").removeClass("d-none")
        $("#perro").removeClass("d-none")
        $("#perra").removeClass("d-none")
        $("#salchipapa").removeClass("d-none")
        $("#choripan").removeClass("d-none")
        $("#hamburguesa").removeClass("d-none")
        $("#choripapa").removeClass("d-none")
        $("#pizza").removeClass("d-none")
    })
    let user=Usuario.cargarTodos();
    if (user.length==0) {
        $("#sesion").append(`    <script src="./assets/js/navegacion.js"></script>
        <button type="button" id="btnlogin" class="btn btn-outline-light me-2">Iniciar Sesion</button>
        <button type="button" id="btnregister" class="btn btn-warning">Registrarse</button>`) 
    }
    user.forEach(u => {
        if (u.estalogin=="si") {
            $("#sesion").empty();
            $("#sesion").append(`    <script src="./assets/js/navegacion.js"></script>
            <button type="button" id="btnperfil" class="btn btn-outline-light me-2">Perfil</button>
            <button type="button" id="btncerrar" class="btn btn-warning">Cerrar Sesion</button>`)
            
        }
        if(u.estalogin=="no"){
            $("#sesion").empty();
            $("#sesion").append(`
            <script src="./assets/js/navegacion.js"></script>
            <button type="button" id="btnlogin" class="btn btn-outline-light me-2">Iniciar Sesion</button>
            <button type="button" id="btnregister" class="btn btn-warning">Registrarse</button>`)
        }
        
    });

    


})
