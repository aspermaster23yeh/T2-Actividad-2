import { useReducer } from "react"; // Importa el hook useReducer de React

// Estado inicial y función reductora
// G) useReducer
// Define el estado inicial del contador y la función reductora para manejar las acciones.
const initialState = { contador: 0 }; // Estado inicial del contador, donde el valor comienza en 0

// Función reductora que maneja las acciones
const reducer = (state, action) => { 
    // Función que recibe el estado actual y una acción para determinar cómo actualizar el estado
    switch (action.type) { // Dependiendo del tipo de acción, actualiza el estado
        case 'incrementar': // Acción para incrementar el contador
            return { contador: state.contador + 1 }; // Retorna un nuevo estado con el contador incrementado en 1
        case 'decrementar': // Acción para decrementar el contador
            return { contador: state.contador - 1 }; // Retorna un nuevo estado con el contador decrecido en 1
        default: // Si la acción no es reconocida, retorna el estado actual
            return state; // Devuelve el estado sin cambios
    }
};

// Vista para el Inciso G - useReducer
function IncisoG() {
    // Usa el hook useReducer con el reducer y el estado inicial
    const [state, dispatch] = useReducer(reducer, initialState);
    // state contiene el estado actual y dispatch es la función para enviar acciones al reducer

    // Renderiza la vista con el valor del contador y botones para incrementar y decrementar
    return (
        <div>
            <p>Contador: {state.contador}</p> {/* Muestra el valor actual del contador */}
            <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button> {/* Botón que despacha la acción de incrementar */}
            <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button> {/* Botón que despacha la acción de decrementar */}
        </div>
    );
}

export default IncisoG; // Exporta el componente IncisoG para que pueda ser utilizado en otras partes de la aplicación
