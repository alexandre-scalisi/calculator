import './App.css';
import { ScreenProvider } from './contexts/ScreenContext';
import { ActionProvider } from './contexts/ActionContext';
import { OperatorProvider } from './contexts/OperatorContext';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <ScreenProvider>
      <ActionProvider>
        <OperatorProvider>
        <Calculator />
        </OperatorProvider>
      </ActionProvider>
    </ScreenProvider>
  </div>
)
export default App;
