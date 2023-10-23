import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import CatImage from './components/CatImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent textbutton="CIAONE!" />
        <CatImage urlimage="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          altimage="react" />
      </header>
    </div>
  );
}

export default App;
