import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';

function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)

  let loggedIn = true;

  return (
    <Router>
      {/* Routes */}
      <Routes>
      {/* Redirection to protect our routes */}
        <Route exact path="">
        {
          loggedIn 
          ? <Route path='/' element={ <Navigate to='/dashboard'/> }/> 
          : <Route path='/' element={ <Navigate to='/login'/> }/>
        }
        </Route>
        {/* Login Route */}
        <Route exact path='/login'  element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        {/* Dashboard route */}
        <Route exact path="/dashboard">
        {
          loggedIn 
          ? <Route path="/dashboard" element={ <DashBoard/> }/> 
          : <Route path='/dashboard' element={ <Navigate to='/login'/> }/   >
        }
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
        <Route path='/tasks' element={ <TasksPage/> }>
        {
          loggedIn 
          ? <Route path="/tasks" element={ <TasksPage/> }/> 
          : <Route path='/tasks' element={ <Navigate to='/login'/> }/>
        }
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
