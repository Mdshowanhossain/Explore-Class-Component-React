import React from 'react';
import FormHandle from './Components/Formahandle/FormHandle';
import Clock from './Components/StateLifeCycle/Clock/Clock';
import ClockList from './Components/StateLifeCycle/Clock/ClockList';
import CalculatorBoilWater from './Components/LiftingStateUp/CalculatorBoilWater';

const App = () => {

  // let quantities = [1, 2, 3, 4];

  return (
    <div>

      {/* <-----------------STATE LIFECYCLE & CONDITIONAL RENDERING-----------------------> */}
      {/* <Clock /> */}
      {/* <ClockList quantities={quantities} /> */}
      {/* <-----------------STATE LIFECYCLE & CONDITIONAL RENDERING END-----------------------> */}

      {/* <-----------------FORM HANDLING-----------------------> */}
      {/* <FormHandle />   */}
      {/* <-----------------FORM HANDLING END-----------------------> */}

      {/* <-----------------LIFTING STATE UP-----------------------> */}
      {/* <CalculatorBoilWater /> */}
      {/* <-----------------LIFTING STATE UP END-----------------------> */}


    </div>
  );
};

export default App;
