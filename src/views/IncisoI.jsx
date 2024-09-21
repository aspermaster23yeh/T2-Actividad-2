import { useState, useEffect } from 'react'; // Trae los hooks useState y useEffect desde React
import axios from 'axios'; // Carga la librería axios para realizar peticiones HTTP

function IncisoI({ datos }) { // E) Hook - useState, useEffect
    // Estado para gestionar los datos obtenidos de la API
    const [data, setData] = useState([]); // Inicializa el estado 'data' como un array vacío
    // Estado para llevar el control de la página activa en la paginación
    const [currentPage, setCurrentPage] = useState(1); // Comienza la paginación en la página 1
    // Estado para definir el número de elementos que se muestran por página
    const [itemsPerPage, setItemsPerPage] = useState(4); // Fija el número de elementos por página en 4

    // E) Hook - useEffect
    // Envía una solicitud HTTP para obtener información cuando el componente se renderiza por primera vez
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') // Realiza una solicitud GET a la API
            .then(response => {
                setData(response.data); // Actualiza el estado con los datos obtenidos de la API
                console.log(response.data); // Muestra los datos en la consola del navegador
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error); // Maneja los errores de la solicitud
            });
    }, []); // El arreglo de dependencias vacío asegura que el efecto se ejecute una única vez al montar el componente

    // Calcula los índices del primer y último elemento a mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage; // Calcula el índice del último elemento visible en la página
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Calcula el índice del primer elemento visible en la página
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); // Extrae los elementos que pertenecen a la página actual

    // Función para actualizar la página activa
    const paginate = (pageNumber) => setCurrentPage(pageNumber); // Cambia la página activa al número que se le pasa

    // Genera un arreglo con los números de página basados en la cantidad total de datos y el número de elementos por página
    const pageNumbers = []; // Declara un arreglo para almacenar los números de página
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i); // Agrega cada número de página al arreglo
    }

    // Renderiza la tabla con los datos y los botones de paginación
    return (
        <div>
            <h2>Inciso I - Paginación de Tabla</h2> {/* Encabezado de la sección */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Nombre de Usuario</th>
                        <th>Teléfono</th>
                        <th>Sitio Web</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => ( // Recorre los elementos de la página actual
                        <tr key={item.id}> {/* Usa el id como clave única para cada fila */}
                            <td>{item.id}</td> {/* Muestra el ID del usuario */}
                            <td>{item.name}</td> {/* Muestra el nombre del usuario */}
                            <td>{item.username}</td> {/* Muestra el nombre de usuario */}
                            <td>{item.phone}</td> {/* Muestra el teléfono del usuario */}
                            <td>{item.website}</td> {/* Muestra el sitio web del usuario */}
                            <td>{item.email}</td> {/* Muestra el correo electrónico del usuario */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {pageNumbers.map(number => ( // Recorre los números de página
                    <button
                        key={number} // Usa el número de página como clave única
                        onClick={() => paginate(number)} // Cambia a la página correspondiente al hacer clic en el botón
                        className={number === currentPage ? 'active' : ''} // Marca el botón de la página actual con una clase especial
                    >
                        {number} {/* Muestra el número de página en el botón */}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default IncisoI; // Exporta el componente IncisoI para poder utilizarlo en otros lugares de la aplicación
