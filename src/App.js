import './App.css';
import Login from './Components/Login';
import ProfilePage from './Components/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App text-white">
      <BrowserRouter>
        <Routes>
        <Route index element={<Login />}/>
          <Route path='/ProfilePage' element={<ProfilePage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;