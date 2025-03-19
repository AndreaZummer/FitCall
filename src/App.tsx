import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Home from './components/Home';

const router = createBrowserRouter(createRoutesFromElements([
  <Route path='/' element={<LandingPage/>}>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<SignUp/>}/>
  </Route>,
  <Route path=':username' element={<Home/>}/> 
]));

function App() {
  return (
    <RouterProvider router={router}/>

)}
export default App;
