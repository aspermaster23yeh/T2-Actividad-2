import { useReducer } from "react"; // Trae el hook useReducer de la biblioteca React

// Configuración del estado inicial y la función reductora
// G) useReducer
// Establece el estado base del contador y la función encargada de manejar las actualizaciones del estado.
const initialState = { contador: 0 }; // Estado base donde el contador empieza en 0

// Función reductora para procesar las acciones
const reducer = (state, action) => { 
    // Función que toma el estado actual y una acción, y decide cómo modificar el estado
    switch (action.type) { // Según el tipo de acción, se aplica un cambio en el estado
        case 'incrementar': // Acción que incrementa el contador
            return { contador: state.contador + 1 }; // Devuelve el estado actualizado con el contador aumentado en 1
        case 'decrementar': // Acción que reduce el contador
            return { contador: state.contador - 1 }; // Devuelve el estado actualizado con el contador disminuido en 1
        default: // Si la acción no es reconocida, se mantiene el estado actual
            return state; // No se realiza ninguna modificación en el estado
    }
};

// Componente para el Inciso G - uso de useReducer
function IncisoG() {
    // Inicializa el hook useReducer con la función reductora y el estado inicial
    const [state, dispatch] = useReducer(reducer, initialState);
    // state contiene el estado actual y dispatch es la función que envía acciones a la reductora

    // Genera el HTML mostrando el valor del contador y los botones para modificarlo
    return (
        <div>
            <p>Contador: {state.contador}</p> {/* Visualiza el valor actual del contador */}
            <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button> {/* Botón que dispara la acción para aumentar el contador */}
            <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button> {/* Botón que dispara la acción para reducir el contador */}
        </div>
    );
}

export default IncisoG; // Exporta el componente IncisoG para su uso en otros módulos de la aplicación
