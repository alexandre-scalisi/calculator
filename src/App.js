import './App.css';
import { ScreenProvider } from './contexts/ScreenContext';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <ScreenProvider>
      <Calculator />
    </ScreenProvider>
  </div>
)
export default App;
