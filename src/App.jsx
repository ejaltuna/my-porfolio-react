import "./App.css";
import Experianecia from "./components/Experianecia.jsx";
import NavHeader from "./components/NavHeader.jsx";

function App() {
  return (
    <>
      <NavHeader />
      <div className="w-full md:w-3/5 container   mx-auto">
        <Experianecia />
      </div>
    </>
  );
}

export default App;
