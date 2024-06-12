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
        <button type="button" id="btnperfil" class="btn btn-outline-light me-2">Perfil</button>
        <button type="button" id="btncerrar" class="btn btn-warning">Cerrar Sesion</button>`)
        
    }
}
$(function () {
    session();
    $('#modalId').on('show.bs.modal', function (event) {
        let button = event.relatedTarget;
        let recipient = button.getAttribute('data-bs-whatever');
    });
    
    var row = localStorage.getItem("product");
    console.log(row, 'row');
    if (row != null) {
        $("#myTable tbody").append(row);
    }

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
    $('.carrito').click(function (e) {
        e.preventDefault();
        localStorage.setItem("select",e.target.getAttribute("idprodducto"))
        window.location="./carrito.html"
    });

    $('#btnregister').click(function (e) {
        e.preventDefault();
        window.location="./registro.html"
    });

    $('#btnperfil').click(function (e) {
        e.preventDefault();
        window.location="./perfil.html"
    });

    $('#calif-modal').on('input', function (e) {
        var calif = $('#calif-modal').val();
        if (calif >= 1 && calif <= 5) {
            $('#calif-modal').removeClass('is-invalid');
            $('#calif-modal').addClass('is-valid');
        } else {
            $('#calif-modal').removeClass('is-valid');
            $('#calif-modal').addClass('is-invalid');
        }
    });

    $('#btn-modal').click(function (e) {
        e.preventDefault();
        if ($('#product-modal').val() != "" && $('#product-modal').val() != null
            && $('#coment-modal').val() != "" && $('#coment-modal').val() != null
            && $('#calif-modal').hasClass('is-valid')) {
            let product = $('#product-modal').val();
            let coment = $('#coment-modal').val();
            let calif = $('#calif-modal').val();
            let user = Usuario.getUsuarioLogin();
                var newRow =
                "<tr>" +
                "<td>"  + product + "</td>" +
                "<td>" + coment + "</td>" +
                "<td>" + parseInt(calif) + "</td>" +
                "<td>" + user.email + "</td>" +
                "</tr>";
            let products = localStorage.getItem("product");
            console.log(products, typeof(products),'products 22');

            console.log(newRow, 'newRow');
            products = products + newRow;
            console.log(products, 'products');
            localStorage.setItem("product", products);
            $("#myTable tbody").append(newRow);

            $('#product-modal').val("");
            $('#coment-modal').val("");
            $('#calif-modal').val("");
        } else {
            alert("Todos los campos son obligatorios");
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
