import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Routing from "./Routing/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
        {/* <Navbar /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
