import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  return (
    props.contribs.length > 0 && (
      <section className="team-section" style={{ backgroundColor: props.colorSec }}>
        <h3 style={{ borderColor: props.colorPri }}>{props.name}</h3>
        {props.contribs.map((contrib) => (
          <div className="contribs">
            <Collaborator backColor={props.colorPri} key={contrib.name} name={contrib.name} cargo={contrib.cargo} image={contrib.image} />
          </div>
        ))}
      </section>
    )
  );
};

export default Team;
