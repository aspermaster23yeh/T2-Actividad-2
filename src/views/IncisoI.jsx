/* eslint-disable react/prop-types */ 
import { useState, useEffect } from 'react'; // Importa los hooks useState y useEffect de React
import axios from 'axios'; // Importa la librería axios para hacer solicitudes HTTP

function IncisoI({ datos }) { // E) Hook - useState, useEffect
    // Estado para almacenar los datos de la API
    const [data, setData] = useState([]); // Inicializa el estado 'data' como un array vacío
    // Estado para la página actual en la paginación
    const [currentPage, setCurrentPage] = useState(1); // Inicializa la página actual en 1
    // Estado para definir cuántos ítems se muestran por página
    const [itemsPerPage, setItemsPerPage] = useState(4); // Establece el número de ítems por página en 4

    // E) Hook - useEffect
    // Realiza una solicitud HTTP para obtener datos cuando el componente se monta
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') // Solicitud GET a la API
            .then(response => {
                setData(response.data); // Actualiza el estado con los datos recibidos
                console.log(response.data); // Muestra los datos en la consola
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Maneja errores en la solicitud
            });
    }, []); // Dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

    // Calcula el índice del primer y último ítem para la página actual
    const indexOfLastItem = currentPage * itemsPerPage; // Índice del último ítem en la página actual
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice del primer ítem en la página actual
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); // Datos de la página actual

    // Función para cambiar la página
    const paginate = (pageNumber) => setCurrentPage(pageNumber); // Cambia la página actual al número especificado

    // Genera números de página basados en la longitud de los datos y ítems por página
    const pageNumbers = []; // Inicializa un array vacío para los números de página
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i); // Agrega cada número de página a la lista
    }

    // Renderiza la vista con la tabla de datos y botones de paginación
    return (
        <div>
            <h2>Inciso I - Paginación de Tabla</h2> {/* Título de la sección */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => ( // Mapea sobre los ítems de la página actual
                        <tr key={item.id}> {/* Usa el id como clave para cada fila */}
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
                {pageNumbers.map(number => ( // Mapea sobre los números de página
                    <button
                        key={number} // Usa el número como clave para cada botón
                        onClick={() => paginate(number)} // Cambia a la página correspondiente al hacer clic
                        className={number === currentPage ? 'active' : ''} // Resalta el botón de la página actual
                    >
                        {number} {/* Muestra el número de página */}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default IncisoI; // Exporta el componente IncisoI para su uso en otras partes de la aplicación
