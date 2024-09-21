import useUsuarios from '../hooks/useUsuarios'; // Trae el hook personalizado llamado useUsuarios

// Componente para la vista del Inciso J - Implementación del custom hook useUsuarios
function IncisoJ() {
    // Emplea el hook personalizado para acceder a la lista de usuarios
    const usuarios = useUsuarios(); // Utiliza el hook useUsuarios para recuperar los datos de usuarios

    // Genera el contenido de la vista mostrando la lista de usuarios
    return (
        <div>
            <h2>Lista de Usuarios (con custom hook)</h2> {/* Encabezado que indica la lista de usuarios */}
            <ul>
                {/* Recorre la lista de usuarios y muestra cada uno en un elemento de la lista */}
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li> // Muestra cada usuario en un <li>, asignando el id como clave única
                ))}
            </ul>
        </div>
    );
}

export default IncisoJ; // Hace disponible el componente IncisoJ para su uso en otros lugares de la aplicación
