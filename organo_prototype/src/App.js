import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      colorPri: "#57c278",
      colorSec: "#D9f7e9",
    },
    {
      name: "Front-End",
      colorPri: "#82CFFA",
      colorSec: "#E8f8ff",
    },
    {
      name: "Data Science",
      colorPri: "#A6D157",
      colorSec: "#F0F8E2",
    },
    {
      name: "Devops",
      colorPri: "#E06B69",
      colorSec: "#FDE7E8",
    },
    {
      name: "UX e Design",
      colorPri: "#DB6EBF",
      colorSec: "#FAE9F5",
    },
    {
      name: "Mobile",
      colorPri: "#FFBA05",
      colorSec: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      colorPri: "#FF8A29",
      colorSec: "#FFEEDF",
    },
  ];

  const [contribs, setContribs] = useState([]);

  const onAddNewContrib = (contrib) => {
    setContribs([...contribs, contrib]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onRegContrib={(contrib) => onAddNewContrib(contrib)}
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          colorPri={team.colorPri}
          colorSec={team.colorSec}
          contribs={contribs.filter((contrib) => contrib.team === team.name)}
        />
      ))}
    </div>
  );
}

export default App;
