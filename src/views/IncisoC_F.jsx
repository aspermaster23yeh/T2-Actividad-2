import { useState } from "react"; // Importa el hook useState de React

// Custom Hook para el contador
// F) Custom Hook - useCounter
// Este custom hook maneja el estado de un contador, permitiendo su inicialización y modificación.
const useCounter = (inicial = 0) => {
	// E) Hook - useState
	// Declara un estado llamado 'contador' y una función para actualizarlo, inicializándolo con el valor pasado como argumento.
	const [contador, setContador] = useState(inicial);

	// D) Funciones de retorno y argumentos
	// Función para incrementar el contador. Actualiza el estado sumando 1 al valor actual.
	const incrementar = () => setContador(contador + 1);

	// Retorna un array con el valor actual del contador y la función para incrementarlo.
	return [contador, incrementar];
};

// Vista para el Inciso C-F - Objetos literales, useState, useCounter
function IncisoC_F() {
	// F) Custom Hook - useCounter
	// Utiliza el custom hook useCounter, inicializando el contador con el valor 5.
	const [contador, incrementar] = useCounter(5);

	// Renderiza la vista que muestra el valor del contador y un botón para incrementarlo.
	return (
		<div>
			{/* C) Objetos literales e interfaces */}
			{/* Aunque no haya interfaces explícitas, el estado del contador es un valor primitivo
                que podría representarse como parte de un objeto en otros contextos. */}
			<p>Contador: {contador}</p> {/* Muestra el valor actual del contador */}
			<button onClick={incrementar}>Incrementar</button> {/* Botón que llama a la función para incrementar el contador */}
		</div>
	);
}

export default IncisoC_F; // Exporta el componente IncisoC_F para que pueda ser utilizado en otras partes de la aplicación
