import './App.css';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

const router = createBrowserRouter(createRoutesFromElements([
  <Route path='/' element={<Header/>}>
    <Route path='login' element={<Login/>}/>
  </Route>
]));

function App(): React.FC {
  return <RouterProvider router={router}/>
}
export default App;
