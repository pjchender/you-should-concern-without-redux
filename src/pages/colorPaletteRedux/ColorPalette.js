import { useRef } from 'react';
import { useSelector } from 'react-redux';

const THEME = {
  red: 'danger',
  blue: 'primary',
  green: 'success',
};

const ColorPalette = ({
  color,
  handleIncrease,
  handleDecrease,
  handleInput,
}) => {
  // NOTICE:
  const count = useSelector((state) => state.counter[color]);

  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div>
      <div className={`position-relative box mb-3 bg-${THEME[color]}`}>
        {count}

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {renderCount.current}
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>

      <div className="d-block">
        <input
          type="range"
          className="form-range"
          onInput={handleInput}
          min="0"
          max="255"
          value={count}
        />
      </div>

      <div className="d-grid gap-2 d-block">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleIncrease}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ColorPalette;
