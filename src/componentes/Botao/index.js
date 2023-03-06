import { useState } from "react";
import "./Botao.css";

const Botao = (props) => {
  const [button, setButton] = useState(false);

  function handleClick() {
    setButton((button) => !button);
    console.log("click");
  }

  let toggleClassCheck = button ? "visivel" : "";

  return (
    <button
      className={`botao ${props.className} ${toggleClassCheck} `}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Botao;
