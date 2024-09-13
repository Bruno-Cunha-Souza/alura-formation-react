import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdownlist">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.whenChanged(e.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default DropdownList;
