const ShowAlertButton = ({ onClick }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>
        Show Alert
      </button>
    </div>
  );
};

export default ShowAlertButton;
