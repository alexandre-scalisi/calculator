import './App.css';
import { CalcProvider } from './contexts/CalcContext';
import Calculator from './components/Calculator';


// CalcProvider me fournit un contexte avec des "states" globaux 
const App = () => (
  <div className="App">
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  </div>
)
export default App;
