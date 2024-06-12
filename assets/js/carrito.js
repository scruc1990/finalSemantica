function calcularprecio() {
    let cant=document.getElementById("cantidad").value
    
    let precio=document.getElementById("producto").selectedOptions[0].getAttribute("precio");
   
    $("#precio").val(cant*precio)

}
function calculatotal() {
    var total_c = 0;
    //Recorro todos los tr ubicados en el tbody
    $('#mitable tbody').find('tr').each(function () {
               
          total_c += parseInt($(this).find('td').eq(2).text());
                  
      });
    

    $("#total").val( total_c );
    
}
$(function () {
    let user=Usuario.cargarTodos();
    
        $("#banco").val(user[0].banco)
        $("#telefono").val(user[0].telefono)
        $("#direccion").val(user[0].direccion)
   
    $("#agregarfila").click(function (e) {
        if ($("#cantidad").val()!="" && $("#precio").val()!="") {
            
        

        var newRow =
            "<tr>" +

            "<td>" + $("#producto").val() + "</td>" +
            "<td>" + $("#cantidad").val() + "</td>" +
            "<td>" + $("#precio").val() + "</td>" +
            '<td><button class="removeBtn">Borrar</button></td>' +
            "</tr>";
        $("#mitable tbody").append(newRow);
    }
    $("#cantidad").val("");
    $("#precio").val("");
    calculatotal();

    })
    $("#actualizardatosenvio").click(function (e) {
        let banco=$("#banco").val();
        let dir=$("#direccion").val()
        let tel=$("#telefono").val()
        let aux=Usuario.getUsuarioLogin();
        let us=new Usuario(aux.id, aux.nombre,aux.email, tel, aux.contrasena, dir, banco, aux.estalogin)
       
       
        us.modificar()

    })
    $(document).on("click", ".removeBtn", function () {
        $(this).closest("tr").remove();
        calculatotal();

    });
    $('#aceptarpedido').click(function (e) {
        e.preventDefault();

    });
    $('#cancelarpedido').click(function (e) {
        e.preventDefault();

    });
    $('#actualizardatosenvio').click(function (e) {
        e.preventDefault();

    });
    $("#producto").empty();
    let productos = []
    let producto1 = new Producto(1, "Hamburguesa", 10000)
    let producto2 = new Producto(2, "Pizza", 8000)
    let producto3 = new Producto(3, "Cocacola", 3500)
    let producto4 = new Producto(4, "Perro", 18500)
    let producto5 = new Producto(5, "Perra", 14000)
    let producto6 = new Producto(6, "Salchipapas", 12000)
    let producto7 = new Producto(7, "Choripan", 8000)
    let producto8 = new Producto(8, "Choripapa", 9000)
    let producto9 = new Producto(9, "Mandipollo", 11000)

    productos.push(producto1)
    productos.push(producto2)
    productos.push(producto3)
    productos.push(producto4)
    productos.push(producto5)
    productos.push(producto6)
    productos.push(producto7)
    productos.push(producto8)
    productos.push(producto9)

    let op = ``;
    productos.forEach((p) => {

        op += `

         <option precio="${p.precio}" value="${p.id}">${p.nombre}</option>`;
    });


    $("#producto").append(op);
    if (localStorage.getItem("select")) {
         document.getElementById('producto').getElementsByTagName('option')[localStorage.getItem("select")].selected = 'selected'
         localStorage.removeItem("select")
    }
    $('input#cantidad').on('input', calcularprecio);
    $('#producto').on('change',calcularprecio )
    //mostrar datos para editar



})