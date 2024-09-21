import Saludo from '../components/Saludo'; // Importa el componente Saludo desde la carpeta de componentes

// Vista para el Inciso B - Componentes JavaScript
function IncisoB() {
    return (
        <div className="content"> {/* Contenedor principal que utiliza la clase CSS .content */}
            <Saludo /> {/* Renderiza el componente Saludo que muestra un mensaje de saludo */}
            <p>
                {/* Enlace a un GIF en Giphy, estilizado con un color específico */}
                <a href="https://giphy.com/gifs/typing-N57KpqDb0tlWE" style={{ color: '#e0e0e0' }}>
                    via GIPHY
                </a>
            </p>
        </div>
    );
}

export default IncisoB; // Exporta el componente IncisoB para que pueda ser utilizado en otras partes de la aplicación
