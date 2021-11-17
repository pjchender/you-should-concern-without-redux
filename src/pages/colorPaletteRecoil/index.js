import ColorPalette from './ColorPalette';
import DisplayColor from './DisplayColor';
import { counterState } from './counterAtom';
import { useSetRecoilState } from 'recoil';

const ColorPaletteReact = () => {
  const setCount = useSetRecoilState(counterState);

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
      <DisplayColor />
      <div className="row">
        <div className="col">
          <ColorPalette
            color="red"
            handleIncrease={handleIncrease('red')}
            handleDecrease={handleDecrease('red')}
            handleInput={handleInput('red')}
          />
        </div>
        <div className="col">
          <ColorPalette
            color="blue"
            handleIncrease={handleIncrease('blue')}
            handleDecrease={handleDecrease('blue')}
            handleInput={handleInput('blue')}
          />
        </div>
        <div className="col">
          <ColorPalette
            color="green"
            handleIncrease={handleIncrease('green')}
            handleDecrease={handleDecrease('green')}
            handleInput={handleInput('green')}
          />
        </div>
      </div>
    </>
  );
};

export default ColorPaletteReact;
