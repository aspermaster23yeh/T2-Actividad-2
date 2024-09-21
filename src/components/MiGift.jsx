    import gif from '../assets/gif.webp'; // Asegúrate de que la ruta sea correcta

    function MiGift() {
        return (
            <div style={{ 
                width: '100%', 
                height: 0, 
                paddingBottom: '56%', // Mantiene una relación de aspecto de 16:9
                position: 'relative', 
                marginBottom: '1rem' // Agrega un margen inferior si es necesario
            }}>
                <img 
                    src={gif} 
                    alt="Descripción del GIF" 
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover' // Mantiene la proporción de la imagen
                    }} 
                />
            </div>
        );
    }

export default MiGift;