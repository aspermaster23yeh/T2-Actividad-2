import { useState, useEffect } from 'react';
import axios from 'axios';

// Hook personalizado para recuperar usuarios desde una API
function useUsuarios() {
    const [usuarios, setUsuarios] = useState([]); // Variable de estado para guardar la lista de usuarios

    // Hook useEffect para realizar la solicitud HTTP al cargar el componente
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsuarios(response.data)) // Actualiza el estado con la información de usuarios recibida
            .catch(error => console.error(error)); // Captura y muestra errores
    }, []);

    return usuarios; // Devuelve la lista de usuarios
}

export default useUsuarios;
