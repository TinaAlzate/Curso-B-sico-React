import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage'
import TasksPage from './pages/tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'
import { useEffect } from 'react'
import Propspage from './pages/home/Propspage'

function AppRoutingOne() {

    let taskList = [
      { 
        id: 1,
        name: 'Task 1',
        description:'My frist task'
      },
      { 
        id: 2,
        name: 'Task 2',
        description:'My second task'
      }
    ];

    let logged = false;

    useEffect(() =>{
      logged = localStorage.getItem('credentials');
      console.log('User loged', logged)
    }, [])

  return (
      <Router>
        <div>
          <aside>
            <Link to='/'>|| HOME |</Link>
            <Link to='about'>| ABOUT |</Link>
            <Link to='faqs'>| FAQs |</Link>
            <Link to='task/1'>| Task 1 |</Link>
            <Link to='task/2'>| Task 2 |</Link>
            <Link to='any404'>| Not existing route |</Link>
            <Link to='login'>| Login ||</Link>
          </aside>
          <main>
            <Routes>
              <Route path='/' element={ <HomePage/> }/>
              <Route path='/online-state' element={ <Propspage/> }/>
              <Route path='/login' element={ <LoginPage/> }>
                {
                  logged 
                  ? () => {
                    alert('You are logged in. Redirecting to home')
                    return (<Route path='/login' element={ <Navigate to='/'/> }/>)
                  } 
                  : () =>{
                    return (<LoginPage></LoginPage>)
                  }
                } 
              </Route>
              <Route path='/about' element={ <AboutPage/> }/>
              <Route path='/faqs' element={ <AboutPage/> }/>
              <Route path='/profile'  element={ <ProfilePage/> }>
                {
                  logged 
                  ? <Route path='/profile' element={ <ProfilePage/> }/> 
                  : <Route path='/profile' element={ <Navigate to='/login'/> }/>
                } 
              </Route>
              <Route path='/tasks' element={ <TasksPage/> }/>
              <Route 
              path='/task/:id' 
              children = {
                ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]} /> )}
              >

              </Route>
              {/* 404 - Page not found */}
              <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default AppRoutingOne;
