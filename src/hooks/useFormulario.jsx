import { useState } from 'react';

// Hook personalizado para gestionar el estado de un formulario
const useFormulario = (valoresIniciales) => {
    // Inicializa el estado del formulario con los valores proporcionados
    const [formulario, setFormulario] = useState(valoresIniciales);

    // Función para modificar el estado del formulario
    const actualizarFormulario = (e) => {
        const { name, value } = e.target; // Extrae el nombre y el valor del campo de entrada
        setFormulario({
            ...formulario, // Conserva los valores previos del formulario
            [name]: value // Actualiza el valor del campo correspondiente
        });
    };

    // Retorna el estado actual del formulario y la función para modificarlo
    return [formulario, actualizarFormulario];
};

export default useFormulario; // Exporta el hook personalizado para que pueda ser utilizado en otros componentes
