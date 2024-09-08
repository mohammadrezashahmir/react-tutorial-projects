import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up/" element={<SignUp />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
