import logo from './logo.svg';
import './App.css';
import { ClockHook } from './components/container/ClockHook';
// import CuartoEjemplo from './hooks/CuartoEjemplo';
// import EjemploTutoria from './hooks/EjemploTutoria';
// import PrimerEjemplo from './hooks/PrimerEjemplo';
// import SegundoEjemplo from './hooks/SegundoEjemplo';
// import MiComponenteConContexto from './hooks/TercerEjemplo';
// import Greeting from './components/pure/greeting';
// import FGreeting from './components/pure/fGreeting'
//import TaskListComponent from './components/container/task_list';
//import GreetingStyled from './components/pure/greetingStyled';
// import Clock from './components/container/Clock';
// import ContactoComponent from '../src/components/pure/contacto.jsx'
// import { Contacto } from './models/contacto.class';


function App() {
  // const nuevoContact = new Contacto('Valentina', 'Alzate', 'valzate618@gmail.com', true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componenete propio tanto de tipo clase como de tipo funciones se definen como las lineas de abajo Greeting.jsx */}
        {/* <Greeting name="Valenitna"></Greeting> */}
        {/* <FGreeting name= "Valenitna"></FGreeting> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactoComponent contacto={ nuevoContact}></ContactoComponent> */}
        {/* Uso de hooks */}
        {/* <PrimerEjemplo></PrimerEjemplo> */}
        {/* <SegundoEjemplo></SegundoEjemplo> */}
        {/* Ejemplo de componente con contexto */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Ejemplo de props.children */}
        {/* <CuartoEjemplo nombre='Valentina'>
          <div>
            <h3>Hola mundo</h3>
          </div>
        </CuartoEjemplo> */}
        {/* Ejemplo de tutoria */}
        {/* <EjemploTutoria></EjemploTutoria> */}
        {/* <GreetingStyled name='Valentina'></GreetingStyled> */}
        {/* <Clock></Clock> */}
        <ClockHook></ClockHook>
        </header>
    </div>
  );
}

export default App;
