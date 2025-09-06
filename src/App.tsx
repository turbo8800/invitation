import { useState } from 'react';
import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

function App() {
  const [screen, setScreen] = useState(1);

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Screen1 setScreen={setScreen} />;
      case 2:
        return <Screen2 setScreen={setScreen} />;
      case 3:
        return <Screen3 />;
      default:
        return <Screen1 setScreen={setScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}

export default App;
