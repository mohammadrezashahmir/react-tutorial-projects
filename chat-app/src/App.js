import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import UserContextProvider from "./context/UserContextProvider";
import Chat from "./components/chat";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
        <Route path="/chats/" element={<Chat />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
