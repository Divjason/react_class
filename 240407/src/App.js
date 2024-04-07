import Box from './Components/Box';
import { useState } from 'react';
import './App.css';

const choice = {
  rock: {
    name: 'rock',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
  },
  scissors: {
    name: 'scissors',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOiy_maW0RrrSaOB7xcb2UFMeKz6Dzph_dlIoV6HsQQ&s',
  },
  paper: {
    name: 'paper',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAdUoOt3uda3rrAqzliVvYd6mcFlc-CTOBzk-Nig1VQ&s',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState('');
  const [computerSelect, setComputerSelect] = useState('');
  const [result, setResult] = useState('');

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'rock')
      return computer.name === 'scissors' ? 'win' : 'lose';
    else if (user.name === 'scissors')
      return computer.name === 'paper' ? 'win' : 'lose';
    else if (user.name === 'paper')
      return computer.name === 'rock' ? 'win' : 'lose';
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  const play = (e) => {
    setUserSelect(choice[e]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[e], computerChoice));
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
