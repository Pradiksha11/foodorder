import './App.css';
import Header from './components/layout/Header';
import AvailableMeal from './components/Meals/AvailableMeal';

const App = () => {
  return (
    <div className="App">
    <Header />
    <main>
    <AvailableMeal />
    </main>
  
    {/*  <header>
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
      </header>*/}
    </div>
  );
}

export default App;
