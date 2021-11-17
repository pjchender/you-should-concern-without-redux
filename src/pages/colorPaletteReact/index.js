import { useState } from 'react';
import ColorPalette from './ColorPalette';
import DisplayColor from './DisplayColor';

const ColorPaletteReact = () => {
  const [count, setCount] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const handleIncrease = (color) => () => {
    setCount((prevCount) => ({
      ...prevCount,
      [color]: prevCount[color] + 1,
    }));
  };

  const handleDecrease = (color) => () => {
    setCount((prevCount) => ({
      ...prevCount,
      [color]: prevCount[color] - 1,
    }));
  };

  const handleInput = (color) => (e) => {
    setCount((prevCount) => ({
      ...prevCount,
      [color]: Number(e.target.value),
    }));
  };

  return (
    <>
      <DisplayColor count={count} />
      <div className="row">
        <div className="col">
          <ColorPalette
            count={count.red}
            color="red"
            handleIncrease={handleIncrease('red')}
            handleDecrease={handleDecrease('red')}
            handleInput={handleInput('red')}
          />
        </div>
        <div className="col">
          <ColorPalette
            count={count.blue}
            color="blue"
            handleIncrease={handleIncrease('blue')}
            handleDecrease={handleDecrease('blue')}
            handleInput={handleInput('blue')}
          />
        </div>
        <div className="col">
          <ColorPalette
            count={count.green}
            color="green"
            handleIncrease={handleIncrease('green')}
            handleDecrease={handleDecrease('green')}
            handleInput={handleInput('green')}
          />
          {/* <Demo /> */}
        </div>
      </div>
    </>
  );
};

export default ColorPaletteReact;
