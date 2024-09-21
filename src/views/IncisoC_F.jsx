import { useState } from "react"; // Se importa el hook useState de React

// Hook personalizado para manejar un contador
// F) Custom Hook - useCounter
// Este hook personalizado gestiona el estado de un contador, permitiendo inicializarlo y actualizarlo.
const useCounter = (inicial = 0) => {
    // E) Hook - useState
    // Se declara una variable de estado 'contador' junto con su función actualizadora, iniciándola con el valor que se pase como argumento.
    const [contador, setContador] = useState(inicial);

    // D) Funciones de retorno y parámetros
    // Función que aumenta el valor del contador sumando 1 al valor actual.
    const incrementar = () => setContador(contador + 1);

    // Devuelve el valor actual del contador y la función que lo incrementa en un array.
    return [contador, incrementar];
};

// Componente para el Inciso C-F - Objetos literales, useState, useCounter
function IncisoC_F() {
    // F) Custom Hook - useCounter
    // Se usa el hook personalizado useCounter, inicializando el contador en 5.
    const [contador, incrementar] = useCounter(5);

    // Renderiza el componente que muestra el contador y un botón para incrementarlo.
    return (
        <div>
            {/* C) Objetos literales e interfaces */}
            {/* Aunque no se usan interfaces explícitas aquí, el estado del contador podría formar parte de un objeto en otros escenarios. */}
            <p>Contador: {contador}</p> {/* Visualiza el valor actual del contador */}
            <button onClick={incrementar}>Incrementar</button> {/* Botón que ejecuta la función para aumentar el contador */}
        </div>
    );
}

export default IncisoC_F; // Se exporta el componente IncisoC_F para poder ser utilizado en otras partes de la app
