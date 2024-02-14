import NavBar from "./components/NavBar";

function App(props) {

  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      {props.children}
    </div>
    
  );
}

export default App;
