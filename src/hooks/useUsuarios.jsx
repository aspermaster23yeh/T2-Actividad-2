import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom Hook para obtener usuarios desde una API
function useUsuarios() {
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar la lista de usuarios

    // Hook useEffect para hacer la petición HTTP al cargar el componente
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsuarios(response.data)) // Actualiza el estado con los usuarios obtenidos
            .catch(error => console.error(error)); // Maneja errores
    }, []);

    return usuarios; // Retorna los usuarios
}

export default useUsuarios;