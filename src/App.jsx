import './App.css'; // Carga los estilos CSS de la aplicación
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Importa componentes de react-router-dom para gestionar la navegación
import IncisoA from './views/IncisoA'; // Trae el componente IncisoA
import IncisoB from './views/IncisoB'; // Trae el componente IncisoB
import IncisoC_F from './views/IncisoC_F'; // Trae el componente IncisoC_F
import IncisoG from './views/IncisoG'; // Trae el componente IncisoG
import IncisoH from './views/IncisoH'; // Trae el componente IncisoH
import IncisoI from './views/IncisoI'; // Trae el componente IncisoI
import IncisoJ from './views/IncisoJ'; // Trae el componente IncisoJ
import IncisoK_L from './views/IncisoK_L'; // Trae el componente IncisoK_L

function App() {
  return (
    // Envuelve toda la aplicación con un Router para gestionar la navegación
    <Router>
      <div className="container"> {/* Contenedor principal de la aplicación */}
        <header> {/* Parte superior de la página */}
          <h3>Selecciona el inciso que necesitas mirar:D</h3> {/* Título de la interfaz */}
        </header>

        <div className="main"> {/* Área principal del contenido */}
          <section className="content"> {/* Sección donde se presenta el contenido según la ruta seleccionada */}
            <Routes>
              <Route path="/a" element={<IncisoA />} />
              <Route path="/b" element={<IncisoB />} />
              <Route path="/c-f" element={<IncisoC_F />} />
              <Route path="/g" element={<IncisoG />} />
              <Route path="/h" element={<IncisoH />} />
              <Route path="/i" element={<IncisoI />} />
              <Route path="/j" element={<IncisoJ />} />
              <Route path="/k-l" element={<IncisoK_L />} />
            </Routes>
          </section>
        </div>

        <nav className="navbar-bottom"> {/* Barra de navegación situada en la parte inferior */}
          <ul>
            <li><NavLink to="/a" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso A</NavLink></li>
            <li><NavLink to="/b" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso B</NavLink></li>
            <li><NavLink to="/c-f" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso C-F</NavLink></li>
            <li><NavLink to="/g" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso G</NavLink></li>
            <li><NavLink to="/h" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso H</NavLink></li>
            <li><NavLink to="/i" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso I</NavLink></li>
            <li><NavLink to="/j" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso J</NavLink></li>
            <li><NavLink to="/k-l" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso K-L</NavLink></li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
