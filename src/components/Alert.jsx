const Alert = ({ children, onClose }) => {
  return (
    <>
      <div className="alert alert-info alert-dismissible">
        {children}
        <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      {/* <button className="btn btn-primary">Click Me</button> */}
    </>
  );
};

export default Alert;
