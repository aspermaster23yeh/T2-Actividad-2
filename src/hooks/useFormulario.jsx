import { useState } from 'react';

// Custom Hook para manejar el estado de un formulario
const useFormulario = (valoresIniciales) => {
    // Estado del formulario inicializado con valoresIniciales
    const [formulario, setFormulario] = useState(valoresIniciales);

    // Función para actualizar el estado del formulario
    const actualizarFormulario = (e) => {
        const { name, value } = e.target; // Obtiene el nombre y valor del campo de entrada
        setFormulario({
            ...formulario, // Mantiene los valores anteriores del formulario
            [name]: value // Actualiza el valor del campo específico
        });
    };

    // Devuelve el estado del formulario y la función para actualizarlo
    return [formulario, actualizarFormulario];
};

export default useFormulario; // Exporta el hook personalizado para su uso en otros componentes
