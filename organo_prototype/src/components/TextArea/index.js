import "./TextArea.css";

const TextArea = (props) => {
  const whenTyping = (e) => {
    props.whenChanged(e.target.value);
  };

  return (
    <div className="text-area">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={whenTyping}
        required={props.required}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
export default TextArea;
