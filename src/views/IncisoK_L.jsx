import useFormulario from '../hooks/useFormulario'; // Trae el hook personalizado useFormulario

// Componente para la vista de Inciso K-L - Formularios y Custom Hook
function IncisoK_L() {
    // Utiliza el hook personalizado para gestionar el estado del formulario
    const [form, actualizarFormulario] = useFormulario({
        nombre: '', // Valor inicial del campo nombre
        email: ''   // Valor inicial del campo email
    });

    // Función que se ejecuta al enviar el formulario
    const manejarSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página por defecto
        alert(`Nombre: ${form.nombre}, Email: ${form.email}`); // Muestra los datos ingresados en una alerta
    };

    // Retorna el JSX que renderiza la interfaz del formulario
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Formulario</h2> {/* Encabezado del formulario */}
            <form onSubmit={manejarSubmit} style={styles.form}> {/* Asocia el manejo del envío del formulario */}
                <div style={styles.formGroup}>
                    <label htmlFor="nombre" style={styles.label}>Nombre:</label> {/* Etiqueta del campo para nombre */}
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre} // Conecta el valor del campo nombre al estado gestionado
                        onChange={actualizarFormulario} // Actualiza el estado al modificar el campo nombre
                        style={styles.input} // Añade estilo al campo de texto
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label> {/* Etiqueta del campo para email */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email} // Conecta el valor del campo email al estado gestionado
                        onChange={actualizarFormulario} // Actualiza el estado al modificar el campo email
                        style={styles.input} // Añade estilo al campo de email
                    />
                </div>
                <button type="submit" style={styles.button}>Enviar</button> {/* Botón para enviar el formulario */}
            </form>
        </div>
    );
}

// Definición de los estilos aplicados al formulario y sus elementos
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
        backgroundColor: '#fff', // Define el color de fondo blanco para el campo de texto
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

export default IncisoK_L; // Hace disponible el componente IncisoK_L para ser importado en otros módulos
