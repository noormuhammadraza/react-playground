import { useState } from "react";

const ExpandableText = ({ maxChars = 100, children }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div>
      <p>
        {text}...
        <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
      </p>
    </div>
  );
};

export default ExpandableText;
