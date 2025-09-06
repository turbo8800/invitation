import React from 'react';

interface Screen1Props {
  setScreen: (screen: number) => void;
}

const Screen1: React.FC<Screen1Props> = ({ setScreen }) => {
  return (
    <div>
      <h1>Ха! Попались! Теперь ищите себя в прошмандовках Хабаровска!</h1>
      <p>Либо нажмите далее!</p>
      <button onClick={() => setScreen(2)}>Далее</button>
    </div>
  );
};

export default Screen1;
