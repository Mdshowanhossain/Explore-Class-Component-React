import './App.css';
import Function1 from './Component/Function/Function1';
import Class1 from './Component/Class/Class1';
import ButtonClick from './Component/Class/ButtonClick';
import ButtonClickF from './Component/Function/ButtonClickF';


function App() {
  return (
    <div className="App">
      <Function1 name="Sohan" age="20" />
      <Function1 name="Osman" age="20" />
      <ButtonClickF /><br />


      <Class1 name="Class-5" age="44" />
      <Class1 name="Class-6" age="45" />
      <ButtonClick />





    </div>
  );
}

export default App;
