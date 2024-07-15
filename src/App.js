import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Head } from "./components/Head";
import Chat from "./components/chat";


function App() {
  return (
    <>
    <div className="main-box">
      <div className="screen" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Head/>}/>
          <Route path="/chat/:id/:name/:light" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
