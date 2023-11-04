import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Like = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setClicked(!clicked);
  };

  if (clicked) {
    return <AiFillHeart onClick={handleClick} size={50} color="red" />;
  }
  return <AiOutlineHeart onClick={handleClick} size={50} />;
};

export default Like;
