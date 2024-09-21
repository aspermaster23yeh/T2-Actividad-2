import useFormulario from '../hooks/useFormulario'; // Importa el hook personalizado useFormulario

// Vista para el Inciso K-L - Formularios y Custom Hook
function IncisoK_L() {
    // Usa el hook personalizado para manejar el estado del formulario
    const [form, actualizarFormulario] = useFormulario({
        nombre: '', // Estado inicial del campo nombre
        email: ''   // Estado inicial del campo email
    });

    // Función para manejar el envío del formulario
    const manejarSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
        alert(`Nombre: ${form.nombre}, Email: ${form.email}`); // Muestra una alerta con los datos del formulario
    };

    // Renderiza la vista con el formulario
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Formulario</h2> {/* Título del formulario */}
            <form onSubmit={manejarSubmit} style={styles.form}> {/* Maneja el evento submit del formulario */}
                <div style={styles.formGroup}>
                    <label htmlFor="nombre" style={styles.label}>Nombre:</label> {/* Etiqueta para el campo nombre */}
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre} // Valor del campo nombre vinculado al estado del formulario
                        onChange={actualizarFormulario} // Maneja los cambios en el campo nombre
                        style={styles.input} // Aplica estilos al campo de entrada
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label> {/* Etiqueta para el campo email */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email} // Valor del campo email vinculado al estado del formulario
                        onChange={actualizarFormulario} // Maneja los cambios en el campo email
                        style={styles.input} // Aplica estilos al campo de entrada
                    />
                </div>
                <button type="submit" style={styles.button}>Enviar</button> {/* Botón para enviar el formulario */}
            </form>
        </div>
    );
}

// Definición de estilos para el formulario
const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '0.5rem',
        color: '#333',
    },
    input: {
        padding: '0.5rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#fff', // Fondo blanco para el input
        boxSizing: 'border-box',
        color: '#333',
    },
    button: {
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#34A853',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};

export default IncisoK_L; // Exporta el componente IncisoK_L para su uso en otras partes de la aplicación
