
import React from 'react';

const MyContext = React.createContext();

const OurProvider = MyContext.Provider;

const OurConsumer = MyContext.Consumer;


export { OurProvider, OurConsumer };