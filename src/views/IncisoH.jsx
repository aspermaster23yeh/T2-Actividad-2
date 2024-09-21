import { useEffect, useState } from 'react'; // Importa los hooks useEffect y useState desde React
import axios from 'axios'; // Importa la librería axios para realizar peticiones HTTP

function IncisoH() {
    // E) Hook - useState
    // Crea una variable de estado para almacenar la lista de usuarios
    const [usuarios, setUsuarios] = useState([]); // Inicializa el estado 'usuarios' como un array vacío

    // E) Hook - useEffect
    // Emplea useEffect para hacer una solicitud HTTP al montar el componente
    useEffect(() => {
        // Realiza una petición GET a la API para obtener los usuarios
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // Actualiza el estado con los datos obtenidos
                setUsuarios(response.data); // Establece 'usuarios' con los datos de la respuesta de la API
            })
            .catch(error => {
                // Gestiona cualquier error durante la solicitud
                console.error(error); // Muestra el error en la consola si ocurre alguno
            });
    }, []); // La lista vacía de dependencias asegura que el efecto se ejecute solo cuando el componente se monta

    // Muestra la lista de usuarios en la interfaz
    return (
        <div>
            <h2>Lista de Usuarios</h2> {/* Encabezado para la lista de usuarios */}
            <ul>
                {/* Recorre la lista de usuarios en el estado para mostrar sus nombres */}
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li> // Muestra el nombre de cada usuario en un <li>, usando el id como clave única
                ))}
            </ul>
        </div>
    );
}

export default IncisoH; // Exporta el componente IncisoH para que pueda ser utilizado en otras partes de la aplicación
