import "./App.css";
import ExpLaboral from "./components/ExpLaboral.jsx";
import Header from "./components/Header.jsx"; 
import NavHeader from "./components/NavHeader.jsx";

function App() {
  return (
    <>
      <NavHeader />
      <div className="w-full md:w-3/5 container   mx-auto">
        <Header />
        <ExpLaboral/>
      </div>
    </>
  );
}

export default App;
