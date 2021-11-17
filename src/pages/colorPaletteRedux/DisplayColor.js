import { useSelector } from 'react-redux';

const DisplayColor = () => {
  const { red, green, blue } = useSelector((state) => state.counter);

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
