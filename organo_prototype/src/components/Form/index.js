import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextArea from "../TextArea";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onRegContrib({ name, cargo, image, team });
    setName("");
    setCargo("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextArea
          value={name}
          whenChanged={(value) => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
        />
        <TextArea
          value={cargo}
          whenChanged={(value) => setCargo(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextArea
          value={image}
          whenChanged={(value) => setImage(value)}
          required={true}
          label="Imagem"
          placeholder="Digite endereço da imagem"
        />
        <DropdownList
          value={team}
          whenChanged={(value) => setTeam(value)}
          required={true}
          label="Time"
          itens={props.teams}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
export default Form;
