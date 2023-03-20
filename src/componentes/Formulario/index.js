import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ aoCadastrar, times, aoCadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [novoTime, setNovoTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    debugger
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setImagem("");
    setCargo("");
    setTime("");
  };

  return (
    <section className="formulario-container">
      <div className="div-form">
        <form className="formulario" onSubmit={aoSubmeter}>
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <Campo
            obrigatorio
            label="Nome"
            placeholder="Digite seu nome "
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <Campo
            obrigatorio
            label="Cargo"
            placeholder="Digite seu cargo "
            valor={cargo}
            aoAlterado={(valor) => setCargo(valor)}
          />
          <Campo
            label="Imagem"
            placeholder="Informe o endereço da imagem "
            aoAlterado={(valor) => setImagem(valor)}
          />
          <ListaSuspensa
            obrigatorio
            label="Times"
            items={times}
            valor={time}
            aoAlterado={(valor) => setTime(valor)}
          />
          <Botao>Criar card</Botao>
        </form>
        <form
          className="formulario"
          onSubmit={(evento) => {
            evento.preventDefault();
            aoCadastrarTime({ nome: novoTime, cor: corTime });
          }}
        >
          <h2>Preencha os dados para criar um novo time.</h2>
          <Campo
            obrigatorio
            label="Nome"
            placeholder="Digite o nome do time "
            valor={novoTime}
            aoAlterado={(valor) => setNovoTime(valor)}
          />
          <Campo
            type="color"
            obrigatorionp
            label="Cor do time"
            placeholder="Digite a cor do time "
            valor={corTime}
            aoAlterado={(valor) => setCorTime(valor)}
          />
          <Botao>Criar um novo time</Botao>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
