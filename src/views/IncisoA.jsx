// Vista para la práctica personalizada con JavaScript
function IncisoA() {
    // Definición de un objeto producto con propiedades nombre, precio y un método mostrarDetalles
    const producto = {
        nombre: 'Laptop', // Nombre del producto
        precio: 1500, // Precio del producto
        categoria: 'Electrónica', // Categoría del producto
        stock: 10, // Cantidad de productos en stock
        mostrarDetalles: function () { // Método que retorna los detalles del producto
            return `Producto: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}, Stock: ${this.stock} unidades disponibles`;
        }
    };

    // Renderiza el componente con los detalles del producto en un párrafo
    return (
        <div>
            <h1>Detalles del Producto</h1>
            <p>{producto.mostrarDetalles()}</p> {/* Llama al método mostrarDetalles y muestra el resultado */}
        </div>
    );
}

export default IncisoA; // Exporta el componente para ser utilizado en otras partes de la aplicación
