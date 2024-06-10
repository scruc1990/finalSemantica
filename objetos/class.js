// Clase Usuario
class Usuario {
    constructor(id, nombre, email, telefono, contrasena, direccion, banco,estalogin) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.contrasena = contrasena; // Contraseña del usuario
        this.direccion = direccion;   // Dirección del usuario
        this.banco = banco;           // Banco del usuario
        this.estalogin = estalogin; 
    }
    guardar() {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(this);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    // Método para buscar un usuario por ID en localStorage
    static buscarPoremail(email) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.find(usuario => usuario.email === email);
    }
    static buscarPorlogin(text) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.find(usuario => usuario.estalogin === text);
    }

    // Método para cargar todos los usuarios desde localStorage
    static cargarTodos() {
        return JSON.parse(localStorage.getItem('usuarios')) || [];
    }
    modificar() {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const index = usuarios.findIndex(usuario => usuario.email === this.email);
        if (index !== -1) {
            usuarios[index] = this;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }
    static getUsuarioLogin() {
        return JSON.parse(localStorage.getItem('userLogin')) || [];
    }
     setUserLogin() {
        localStorage.setItem('userLogin', JSON.stringify(this));
    }
    static logout() {
        localStorage.setItem('userLogin', JSON.stringify([]));
    }
}

// Clase Producto
class Producto {
    constructor(id, nombre, descripcion, precio, categoria, imagenURL) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.imagenURL = imagenURL;
    }
}

// Clase Venta
class Venta {
    constructor(id, usuarioId, fecha, total) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.fecha = fecha;
        this.total = total;
    }
    agregarDetalle(detalle) {
        this.detalles.push(detalle);
    }

    calcularTotal() {
        let total = 0;
        this.detalles.forEach(detalle => {
            total += detalle.cantidad * detalle.precioUnitario;
        });
        return total;
    }


}


// Clase DetalleVenta
class DetalleVenta {
    constructor(id, ventaId, productoId, cantidad, precioUnitario) {
        this.id = id;
        this.ventaId = ventaId;
        this.productoId = productoId;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }


}
