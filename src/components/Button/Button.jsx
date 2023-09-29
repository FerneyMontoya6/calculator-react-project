import { buttons } from "../../utils/buttons-info";
import "./Button.css";

const btnTypes = {
  number: "number",
  symbol: "symbol",
  deletion: "deletion",
  reset: "reset",
  equals: "equals",
};

const buttonNumberClicked = (key, setValueInput) => {
  const btnValue = buttons[key].value;

  setValueInput((prev) => prev + btnValue.toString());
};

const buttonSymbolClicked = (key, setValueInput) => {
  const btnValue = buttons[key].value;
  const lastChar = valueInput.charAt(valueInput.length - 1);

  const symbols = ["+", "-", ".", "/", "x", "="];
  const symbolValidation = symbols.includes(lastChar);

  if (!symbolValidation) {
    setValueInput((prev) => prev + btnValue);
  }
};

const buttonEqualsClicked = (setValueInput) => {
  const mathOperation = eval(valueInput);

  buttonResetClicked();

  setValueInput(mathOperation.toString());
};

const buttonResetClicked = (setValueInput) => {
  setValueInput("");
};

const buttonDeletionClicked = (setValueInput) => {
  setValueInput((prev) => prev.slice(0, -1));
};

function Button({
  index,
  type,
  value,
  size,
  valueInput,
  setValueInput,
  theme,
}) {
  return (
    <button
      className={`
                btns-container--btn__${size}
                ${type}
                ${theme}
            `}
      onClick={() => buttonNumberClicked(index, setValueInput)}
    >
      {value}
    </button>
  );
}

export { Button };
