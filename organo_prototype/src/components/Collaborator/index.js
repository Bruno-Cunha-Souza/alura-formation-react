import "./Collaborator.css";

const Collaborator = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: props.backColor }}>
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="rodape">
        <h4>{props.name}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};
export default Collaborator;
