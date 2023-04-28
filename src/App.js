// import logo from './logo.svg';
import './App.css';
import AxiosChistes from './components/pure/AxiosChistes';
import AxiosExample from './components/pure/AxiosExample';
import FetchExample from './components/pure/FetchExample';
// import ObservableExample from './components/pure/ObservableExample';
// import AsyncExample from './components/pure/forms/AsyncExample';
// import Formikcreate from './components/pure/forms/Formikcreate';
// import Registerformik from './components/pure/forms/Registerformik';
// import Formiklogin from './components/pure/forms/Formiklogin';
// import Formikregister from './components/pure/forms/Formikregister';
// import Father from './components/container/father';
// import { ClockHook } from './components/container/ClockHook';
// import CuartoEjemplo from './hooks/CuartoEjemplo';
// import EjemploTutoria from './hooks/EjemploTutoria';
// import PrimerEjemplo from './hooks/PrimerEjemplo';
// import SegundoEjemplo from './hooks/SegundoEjemplo';
// import MiComponenteConContexto from './hooks/TercerEjemplo';
// import Greeting from './components/pure/greeting';
// import FGreeting from './components/pure/fGreeting'
// import GreetingStyled from './components/pure/greetingStyled';
// import Clock from './components/container/Clock';
// import TaskListComponent from './components/container/task_list';
// import OptionalRender from './components/pure/optionalRender';

function App() {
  // const nuevoContact = new Contacto('Valentina', 'Alzate', 'valzate618@gmail.com', true)
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* Componenete propio tanto de tipo clase como de tipo funciones se definen como las lineas de abajo Greeting.jsx */}
        {/* <Greeting name="Valenitna"></Greeting> */}
        {/* <FGreeting name= "Valenitna"></FGreeting> */}

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
        {/* <ClockHook></ClockHook> */}

        {/* Gestión de eventos */}
        {/* <Father></Father> */}

        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}

        {/* Ejemplos uso de formik y yup */}
        {/* <Formiklogin></Formiklogin> */}
        {/* <Formikregister></Formikregister> */}
        {/* <Registerformik></Registerformik> */}
        {/* <Formikcreate></Formikcreate> */}

        {/* Ejemplos de procesos asíncronos */}
        {/* <AsyncExample></AsyncExample> */}
        {/* <ObservableExample></ObservableExample> */}
        {/* <AxiosExample></AxiosExample> */}
        <AxiosChistes></AxiosChistes>

        {/* PROYECTO FINAL */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* </header> */}
    </div>
  );
}

export default App;
