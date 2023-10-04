import './App.css';
import Backgorund from './components/Backgorund';
import Main from './components/Main';
import State from "./context/State";

function App() {
  return (
    <State>
      <Backgorund />
      <Main />
    </State>
  );
}

export default App;
