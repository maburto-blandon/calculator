import './App.css';
import { WrapperCalculator } from './components/calculator';
import { CalculatorProvider } from './contexts/calculator/calculator.context';


function App() {
  return (
    <CalculatorProvider>
      <div>
        <div style={{
          width: '36em'
        }}>
          <WrapperCalculator />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
