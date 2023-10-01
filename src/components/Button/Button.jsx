import { buttons } from "../../utils/buttons-info";
import "./Button.css";

let termsCounter = 1;
let termDotsRestriction = {
  numero1: "",
};

const addNumberToTerm = (numberToAdd) => {
  const objIndex = termsCounter - 1;
  const keyToEdit = Object.keys(termDotsRestriction)[objIndex];

  termDotsRestriction[keyToEdit] += numberToAdd.toString();
};

const createAnotherTerm = () => {
  termsCounter++;

  termDotsRestriction[`numero${termsCounter}`] = "";
};

const buttonNumberClicked = (index, valueInput, setValueInput) => {
  if (valueInput === "Math Error" || valueInput === "Infinity") {
    buttonResetClicked(setValueInput);
  }

  const btnValue = buttons[index].value;
  addNumberToTerm(btnValue);

  setValueInput((prev) => prev + btnValue.toString());
};

const buttonSymbolClicked = (index, valueInput, setValueInput) => {
  if (valueInput === "Math Error" || valueInput === "Infinity") {
    buttonResetClicked(setValueInput);
  }

  const btnValue = buttons[index].value;
  const lastChar = valueInput.charAt(valueInput.length - 1);

  const symbols = ["+", "-", ".", "/", "x", "="];
  const symbolValidation = symbols.includes(lastChar);

  if (
    !symbolValidation &&
    valueInput !== "" &&
    valueInput !== "Math Error" &&
    valueInput !== "Infinity"
  ) {
    if (btnValue !== ".") {
      createAnotherTerm();
    }
    const currentIndexTerm = Object.keys(termDotsRestriction)[termsCounter - 1];
    const isThereADot = termDotsRestriction[currentIndexTerm].includes(".");

    if (isThereADot) {
      if (!btnValue === ".") {
        addNumberToTerm(btnValue);
        setValueInput((prev) => prev + btnValue);
      }
    } else if (!isThereADot) {
      addNumberToTerm(btnValue);
      setValueInput((prev) => prev + btnValue);
    }
  }
};

const buttonEqualsClicked = (valueInput, setValueInput) => {
  if (valueInput === "Math Error" || valueInput === "Infinity") {
    buttonResetClicked(setValueInput);
  }

  try {
    if (valueInput !== "") {
      let mathOperation = eval(valueInput);

      if (mathOperation % 1 !== 0) {
        mathOperation = mathOperation.toFixed(5);
      }

      buttonResetClicked(setValueInput);

      setValueInput(mathOperation);
    }
  } catch (error) {
    setValueInput("Math Error");
  }
};

const buttonResetClicked = (setValueInput) => {
  const resetObj = {
    numero1: "",
  };
  termDotsRestriction = resetObj;

  termsCounter = 1;

  setValueInput("");
};

const buttonDeletionClicked = (valueInput, setValueInput) => {
  if (valueInput === "Math Error" || valueInput === "Infinity") {
    buttonResetClicked(setValueInput);
  }

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
      onClick={() => {
        if (type === "number") {
          return buttonNumberClicked(index, valueInput, setValueInput);
        } else if (type === "symbol") {
          buttonSymbolClicked(index, valueInput, setValueInput);
        } else if (type === "equals") {
          buttonEqualsClicked(valueInput, setValueInput);
        } else if (type === "deletion") {
          buttonDeletionClicked(valueInput, setValueInput);
        } else if (type === "reset") {
          buttonResetClicked(setValueInput);
        }
      }}
    >
      {value}
    </button>
  );
}

export { Button };
