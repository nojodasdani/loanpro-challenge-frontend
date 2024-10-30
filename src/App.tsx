import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Current } from "./pages/Current/Current";
import { Historic  } from "./pages/Historic/Historic";
import { Average } from "./pages/Average/Average";

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Current />} />
         <Route path="/current" element={<Current />} />
         <Route path="/historic" element={<Historic />} />
         <Route path="/average" element={<Average />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;