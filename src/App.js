import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CrudForm from './components/Form';
import Navbar from './components/navbar';
import TodoApp from './components/to';
import Calculator from './components/calculator';
import CalendarApp from './components/calendar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<CrudForm/>}/>
        <Route path='/to' element={<TodoApp/>}/>
        <Route path='/cal' element={<Calculator/>}/>
        <Route path='/calendar' element={<CalendarApp/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
