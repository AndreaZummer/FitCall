import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Login from '../components/Login';
import LandingPage from '../components/LandingPage';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Offer from '../components/Offer';
import WorkoutPage from '../components/WorkoutPage'
import FilterExercise from '../components/FilterExercises';
import FilterOfExercises from '../components/FilterOfExercises';
import ListOfExercises from '../components/ListOfExercises';
import ExerciseDetail from '../components/ExerciseDetail';

const router = createBrowserRouter(createRoutesFromElements([
  <Route path='/' element={<LandingPage/>}>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<SignUp/>}/>
  </Route>,
  <Route path=':username' element={<Home/>}>
    <Route index element={<Offer/>}/>
    <Route path=':choice' element={<WorkoutPage/>}/>
    <Route path='filter' element={<FilterExercise/>}/>
    <Route path='listofexercises' element={<FilterOfExercises/>}>
      <Route index element={<ListOfExercises/>}/>
      <Route path=':exercisename' element={<ExerciseDetail/>}/>
    </Route>

  </Route>
]));

function App() {
  return (
    <RouterProvider router={router}/>

)}
export default App;
