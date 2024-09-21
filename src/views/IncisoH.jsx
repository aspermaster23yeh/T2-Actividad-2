import { useEffect, useState } from 'react'; // Importa los hooks useEffect y useState de React
import axios from 'axios'; // Importa la librería axios para hacer solicitudes HTTP

function IncisoH() {
    // E) Hook - useState
    // Define un estado para almacenar la lista de usuarios
    const [usuarios, setUsuarios] = useState([]); // Inicializa el estado 'usuarios' como un array vacío

    // E) Hook - useEffect
    // Usa useEffect para hacer una solicitud HTTP cuando el componente se monta
    useEffect(() => {
        // Hace una solicitud GET a la API para obtener la lista de usuarios
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // Actualiza el estado con los datos recibidos
                setUsuarios(response.data); // Establece 'usuarios' con los datos de la respuesta
            })
            .catch(error => {
                // Maneja errores en la solicitud
                console.error(error); // Imprime el error en la consola si ocurre
            });
    }, []); // La dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

    // Renderiza la lista de usuarios
    return (
        <div>
            <h2>Lista de Usuarios</h2> {/* Título de la lista */}
            <ul>
                {/* Mapea sobre el estado de usuarios para renderizar cada nombre */}
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li> // Renderiza cada usuario en un <li>, usando el id como clave
                ))}
            </ul>
        </div>
    );
}

export default IncisoH; // Exporta el componente IncisoH para su uso en otras partes de la aplicación
