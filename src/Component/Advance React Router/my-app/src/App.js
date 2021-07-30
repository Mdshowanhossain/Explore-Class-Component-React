import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ParentNav from './Components/AdvanceRoute/ParentNav';
import ParentRoute from './Components/AdvanceRoute/ParentRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ParentNav />
        <ParentRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
