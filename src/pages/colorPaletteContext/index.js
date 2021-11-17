import { useCount } from './counterContext';
import ColorPalette from './ColorPalette';
import DisplayColor from './DisplayColor';

const ColorPaletteReact = () => {
  const { dispatch } = useCount();

  const handleIncrease = (color) => () => {
    dispatch({
      type: 'increment',
      payload: { color },
    });
  };

  const handleDecrease = (color) => () => {
    dispatch({
      type: 'decrement',
      payload: { color },
    });
  };

  const handleInput = (color) => (e) => {
    dispatch({
      type: 'update',
      payload: {
        color,
        value: Number(e.target.value),
      },
    });
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
