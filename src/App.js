import './App.css';
import { CalcProvider } from './contexts/CalcContext';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  </div>
)
export default App;
