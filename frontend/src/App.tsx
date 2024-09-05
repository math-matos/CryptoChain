import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
