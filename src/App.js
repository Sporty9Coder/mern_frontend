// import logo from './logo.svg';
// import './App.css';
import Address from "./Address";

function App() { 
  function Name()
  {
    return (<h2>Name:{name}</h2>)
  }
  var ele=<Name/>
  console.log(ele);
  var name="Rehan";
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
        <h1>
          hello: {name}
        </h1>
        <b>Mobile info</b>
        <hr></hr>
        <Address/>
        {ele}
    </>
  );
}

export default App;
