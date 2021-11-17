import ColorPalette from './ColorPalette';
import { useDispatch } from 'react-redux';
import { decrement, increment, update } from './counterSlice';
import DisplayColor from './DisplayColor';

const ColorPaletteReact = () => {
  const dispatch = useDispatch();

  const handleIncrease = (color) => () => {
    dispatch(increment(color));
  };

  const handleDecrease = (color) => () => {
    dispatch(decrement(color));
  };

  const handleInput = (color) => (e) => {
    dispatch(update({ color, value: Number(e.target.value) }));
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
