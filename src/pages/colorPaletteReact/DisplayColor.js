const DisplayColor = ({ count }) => {
  const { red, green, blue } = count;

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
