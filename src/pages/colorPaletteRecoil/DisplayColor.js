import { counterState } from './counterAtom';
import { useRecoilValue } from 'recoil';

const DisplayColor = () => {
  const state = useRecoilValue(counterState);
  const { red, green, blue } = state;

  return (
    <div className="row mb-5">
      <div className="col">
        <div
          className="box"
          style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default DisplayColor;
