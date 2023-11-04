import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Like = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setClicked((prev) => !prev);
  };

  return (
    <div>
      {!clicked && <AiOutlineHeart onClick={handleClick} size={50} />}
      {clicked && <AiFillHeart onClick={handleClick} size={50} color="red" />}
    </div>
  );
};

export default Like;
