import './App.css';
import { ScreenProvider } from './contexts/ScreenContext';
import { ActionProvider } from './contexts/ActionContext';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <ScreenProvider>
      <ActionProvider>
        <Calculator />
      </ActionProvider>
    </ScreenProvider>
  </div>
)
export default App;
