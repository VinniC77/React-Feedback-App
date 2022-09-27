import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Spinner loading gif"
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
