import React from 'react';
import FormHandle from './Components/Formahandle/FormHandle';
import Clock from './Components/StateLifeCycle/Clock/Clock';
import ClockList from './Components/StateLifeCycle/Clock/ClockList';
import CalculatorBoilWater from './Components/LiftingStateUp/CalculatorBoilWater';
import ButtonClicked from './Components/HOC/ButtonClicked';
import HeadingHover from './Components/HOC/HeadingHover';
import Counter from './Components/RenderProps/Counter';
import HoverCounter from './Components/RenderProps/HoverCounter';
import User from './Components/RenderProps/User';
import ClickCounter from './Components/RenderProps/ClickCounter';

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

      {/* <-----------------HIGHER ORDER FUNCTION-----------------------> */}
      {/* <ButtonClicked />
      <HeadingHover /> */}
      {/* <-----------------HIGHER ORDER FUNCTION END-----------------------> */}

      {/* <-----------------RENDER PROPS----------------------->*/}

      {/* <User render={(isTrue) => isTrue ? 'sohan' : `Don't know You`} /> */}

      <Counter render={(counter, handleCounter) => <ClickCounter counter={counter} handleCounter={handleCounter} />} />
      <Counter render={(counter, handleCounter) => <HoverCounter counter={counter} handleCounter={handleCounter} />} />

      {/* <-----------------RENDER PROPS END----------------------->*/}
    </div>
  );
};

export default App;
