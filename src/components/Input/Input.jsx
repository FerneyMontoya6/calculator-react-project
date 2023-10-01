import "./Input.css";

function Input({ value, setValueInput, theme }) {
  return (
    <input
      type="text"
      className={`calc-input ${theme}`}
      value={value}
      onChange={(event) => {
        console.log("hola");
        setValueInput(event.target.value);
      }}
      onKeyDown={(e) => {
        //const number = Number(e.key);

        console.log(e.key);
      }}
    />
  );
}

export { Input };
