import { useState } from "react";
import "./botao.css";

const Botao = (props) => {
  return (
    <button className={`botao ${props.className}  `} >
      {props.children}
    </button>
  );
};

export default Botao;
