import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import FGreeting from './components/pure/fGreeting'
// import TaskListComponent from './components/container/task_list';
import ContactoComponent from '../src/components/pure/contacto.jsx'
import { Contacto } from './models/contacto.class';

function App() {
  const nuevoContact = new Contacto('Valentina', 'Alzate', 'valzate618@gmail.com', true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componenete propio tanto de tipo clase como de tipo funciones se definen como las lineas de abajo Greeting.jsx */}
        {/* <Greeting name="Valenitna"></Greeting> */}
        {/* <FGreeting name= "Valenitna"></FGreeting> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactoComponent contacto={ nuevoContact}></ContactoComponent>     
        </header>
    </div>
  );
}

export default App;
